import { AnyEntity } from "../entity/any-entity.type";
import { CommonField } from "../field/common-field.type";
import { AbstractSerializer } from "./abstract.serializer";
import { SerializerType } from "./serializer-type.interface";

export type SerializerMap<Entity extends AnyEntity> = {
  [Field in CommonField<Entity>]?: SerializerType<
    AbstractSerializer<Entity[Field]>
  >;
};