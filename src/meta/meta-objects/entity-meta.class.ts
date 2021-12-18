import { EntityField, EntityPrimaryField } from "../..";
import { AnyEntity } from "../../entity/any-entity.type";
import { EntityType } from "../../entity/entity-type.interface";
import { EntityMetaField } from "./entity-meta-field.class";

export class EntityMeta<
  Entity extends AnyEntity = AnyEntity,
  Primary extends EntityPrimaryField<Entity> = EntityPrimaryField<Entity>,
> {
  primary!: Primary;
  fields = {} as Record<EntityField<Entity>, EntityMetaField<Entity>>;

  constructor(readonly type: EntityType<Entity>) {}
}
