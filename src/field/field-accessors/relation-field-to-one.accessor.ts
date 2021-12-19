import { AnyEntity } from "../../entity/any-entity.type";
import { RelationFieldToOne } from "../field-names/relation-field-to-one.type";
import { BaseFieldAccessor } from "./base-field.accessor";

export class RelationFieldToOneAccessor<
  Entity extends AnyEntity = AnyEntity,
  Field extends RelationFieldToOne<Entity> = RelationFieldToOne<Entity>,
> extends BaseFieldAccessor<Entity, Field> {
  handleSet(newValue: Entity[Field]): void {
    const currentValue = this.value;
    // end up recurse
    if (newValue == currentValue) return;

    this.value = newValue;
    if (newValue)
      this.orm.rm.constructRelation(this.entity, this.field, newValue);
    else this.orm.rm.destructRelation(this.entity, this.field, currentValue);
  }
}
