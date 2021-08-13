import { EntityData, RelationFieldData } from "../data";
import { EmptyValue, PrimaryKeyField } from "../field";
import { FIELDS, POPULATED, PRIMARY, TYPE } from "../symbols";
import { Type } from "../utils";
import { AnyEntity } from "./any-entity.type";
import { BaseEntity } from "./base-entity.class";
import { EntityManagerOptions } from "./entity-manager-options.interface";
import { EntityStore } from "./entity-store.type";

export class EntityManager {
  private map = new Map<Type<AnyEntity>, EntityStore<AnyEntity>>();

  constructor({ entities }: EntityManagerOptions) {
    entities.forEach((type) => this.map.set(type, new Map()));
    this.inspect();
  }

  /**
   * Commit an entity to the store.
   * @param type
   * @param data
   * @returns
   */
  commit<
    Entity extends BaseEntity<Entity, Primary>,
    Primary extends PrimaryKeyField<Entity>,
  >(type: Type<Entity>, data: EntityData<Entity>) {
    const primaryKey = data[type.prototype[PRIMARY]] as Entity[Primary];
    const entity = this.retrieve(type, primaryKey);

    if (!entity[POPULATED]) {
      for (const k in entity[FIELDS]) {
        const field = k as keyof typeof data;

        // relation field data is optional
        if (!(field in data)) continue;

        const relationMeta = entity[FIELDS][field].relation!;
        if (!relationMeta) {
          this.defineFieldValue(entity, field, data[field]);
        } else {
          const relationData = (
            relationMeta.multi ? data[field] : [data[field]]
          ) as RelationFieldData[];
          relationData.forEach((data) => {
            const targetEntity = this.resolveRelationFieldData(
              entity,
              field,
              data,
            );
            this.constructRelation(entity, field, targetEntity);
            this.constructRelation(targetEntity, relationMeta.inverse, entity);
          });
        }
      }
      entity[POPULATED] = true;
    }

    return entity;
  }

  /**
   * Get the reference to the target entity.
   *
   * Return the entity from the store if it exists, otherwise create an
   * unpopulated one in the store and return it.
   *
   * @param type
   * @param primaryKey
   * @returns
   */
  retrieve<
    Entity extends BaseEntity<Entity, Primary>,
    Primary extends PrimaryKeyField<Entity>,
  >(type: Type<Entity>, primaryKey: Entity[Primary]) {
    const store = this.getStore(type);
    let entity = store.get(primaryKey) as Entity | undefined;
    if (!entity) {
      entity = new type();
      entity[POPULATED] = false;
      this.defineFieldValue(entity, entity[PRIMARY], primaryKey);
      store.set(primaryKey, entity);
    }
    return entity;
  }

  // --------------------------------------------------------------------------
  // Common

  /**
   * Get the store of the target entity or throw an error if the entity is not
   * registered.
   * @param type
   * @returns
   */
  private getStore<Entity extends BaseEntity>(type: Type<Entity>) {
    const store = this.map.get(type);
    if (!store)
      throw new Error(
        `The entity ${type.name} must be registered to the entity manager`,
      );
    return store as EntityStore<Entity>;
  }

  /**
   * Define a getter on the specified field of the entity which
   * returns the value directly.
   * @param entity
   * @param field
   * @param value
   */
  private defineFieldValue(entity: AnyEntity, field: string, value: unknown) {
    Reflect.defineProperty(entity, field, { get: () => value });
  }

  // --------------------------------------------------------------------------
  // Relation

  /**
   * Get the target relation entity from a primary key or a data object.
   * @param entity
   * @param field
   * @param data
   * @returns
   */
  private resolveRelationFieldData(
    entity: AnyEntity,
    field: string,
    data: RelationFieldData,
  ) {
    const relationMeta = entity[FIELDS][field].relation!;
    if (typeof data == "object") {
      // TODO: Support this
      // specifying inverse relations in nested data is not supported
      delete data[relationMeta.inverse];
      return this.commit(relationMeta.target(), data);
    } else {
      return this.retrieve(relationMeta.target(), data);
    }
  }

  /**
   * Construct a unilateral relation to the target entity on the specified field
   * of the entity.
   * @param entity
   * @param field
   * @param targetEntity
   */
  private constructRelation(
    entity: AnyEntity,
    field: string,
    targetEntity: AnyEntity,
  ) {
    const value = entity[field];
    if (this.isToManyFieldValue(entity, field, value)) {
      const relationEntities = value ?? new Set();
      relationEntities.add(targetEntity);
      this.defineFieldValue(entity, field, relationEntities);
    } else {
      this.defineFieldValue(entity, field, targetEntity);
    }
  }

  /**
   * @param entity
   * @param field
   * @param value - Field value.
   * @returns
   */
  private isToManyFieldValue(
    entity: AnyEntity,
    field: string,
    value: unknown,
  ): value is Set<AnyEntity> | EmptyValue {
    return !!entity[FIELDS][field].relation?.multi;
  }

  // --------------------------------------------------------------------------

  /**
   * Inspect the registered entities.
   */
  private inspect() {
    const buildThrowErr =
      (type: Type) => (field: string | null, msg: string) => {
        throw new Error(`[${type.name}${field ? `:${field}` : ""}] ${msg}`);
      };

    // individual inspection of each entity
    for (const type of this.map.keys()) {
      const throwErr = buildThrowErr(type);

      if (!type.prototype[TYPE])
        throwErr(null, "Entities must be decorated by @Entity()");
      if (!type.prototype[FIELDS])
        throwErr(null, "Entities must have at least one field");
      if (!type.prototype[PRIMARY])
        throwErr(null, "Entities must have a primary key field");

      Object.values(type.prototype[FIELDS]).forEach(({ name, relation }) => {
        if (relation) {
          if (!this.map.has(relation.target()))
            throwErr(name, "The relation entity is not registered");
        }
      });
    }

    // overall inspection
    for (const type of this.map.keys()) {
      const throwErr = buildThrowErr(type);
      Object.values(type.prototype[FIELDS]).forEach(({ name, relation }) => {
        if (relation) {
          const { target, inverse } = relation;
          const inverseMeta = target().prototype[FIELDS][inverse];
          if (!inverseMeta.relation)
            throwErr(name, "The inverse side must be a relation field");
          if (inverseMeta.relation?.target() != type)
            throwErr(name, "The inverse side must point back to this entity");
          if (inverseMeta.relation?.inverse != name)
            throwErr(
              name,
              "The inverse side of the inverse side must point back to this field",
            );
        }
      });
    }
  }
}
