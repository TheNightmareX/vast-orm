import { EntityPrimaryKey } from "../field/entity-primary-key.type";
import { AnyEntity } from "./any-entity.type";
import { EntityRelationManager } from "./entity-relation-manager.class";
import { EntityType } from "./entity-type.interface";

export class IdentityMap<Entity extends AnyEntity> extends Map<
  EntityPrimaryKey<Entity>,
  Entity
> {
  constructor(
    private readonly type: EntityType<Entity>,
    readonly relationManager: EntityRelationManager,
  ) {
    super();
  }

  get(key: EntityPrimaryKey<Entity>): Entity {
    let entity = super.get(key);
    if (!entity) {
      entity = new this.type(this.relationManager, key);
      this.set(key, entity);
    }
    return entity;
  }
}