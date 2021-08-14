import { BaseEntity } from ".";
import { EntityDataCommon } from "./entity-data-common.type";
import { EntityDataRelation } from "./entity-data-relation.type";

export type EntityData<Entity extends BaseEntity> = EntityDataCommon<Entity> &
  Partial<EntityDataRelation<Entity>>;
