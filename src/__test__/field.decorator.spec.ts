import { BaseEntity, Field, FieldMeta, FIELDS, PRIMARY } from "..";
import { Collection } from "../collection.class";

describe("@Field()", () => {
  describe("Common", () => {
    class TestingEntity extends BaseEntity<TestingEntity> {
      @Field()
      field!: unknown;
    }

    it("should define the meta", () => {
      const fields = TestingEntity.prototype[FIELDS];
      expect(fields).toBeDefined();
      expect(fields.field).toEqual<FieldMeta>({ name: "field" });
    });
  });

  describe("Primary", () => {
    class TestingEntity extends BaseEntity<TestingEntity> {
      @Field({ type: "primary" })
      field!: string;
    }

    it("should define the field meta", () => {
      const fields = TestingEntity.prototype[FIELDS];
      expect(fields).toBeDefined();
      expect(fields.field).toEqual<FieldMeta>({ name: "field" });
    });

    it("should define the primary meta", () => {
      expect(TestingEntity.prototype[PRIMARY]).toBe("field");
    });
  });

  describe("Relation: One", () => {
    const options = {
      type: "relation",
      target: () => TestingEntity,
      inverse: "field",
    } as const;
    class TestingEntity extends BaseEntity<TestingEntity> {
      @Field(options)
      field!: TestingEntity;
    }

    it("should define the meta", () => {
      const fields = TestingEntity.prototype[FIELDS];
      expect(fields).toBeDefined();
      expect(fields.field).toBeDefined();
      expect(fields.field.relation).toEqual(options);
    });
  });

  describe("Relation: Many", () => {
    const options = {
      type: "relation",
      target: () => TestingEntity,
      inverse: "field",
      multi: true,
    } as const;
    class TestingEntity extends BaseEntity<TestingEntity> {
      @Field(options)
      field!: Collection<TestingEntity>;
    }

    it("should define the meta", () => {
      const fields = TestingEntity.prototype[FIELDS];
      expect(fields).toBeDefined();
      expect(fields.field).toBeDefined();
      expect(fields.field.relation).toEqual(options);
    });
  });
});
