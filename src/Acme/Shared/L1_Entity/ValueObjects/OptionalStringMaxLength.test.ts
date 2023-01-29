import {OptionalStringMaxLength} from "./OptionalStringMaxLength";

describe("OptionalStringMax", () => {
  [null, undefined, "ABC"].forEach((value: unknown) => {
    it(`should not throw an error when passing a valid value [${value}]`, () => {

      expect(() => new OptionalStringMaxLength(value as never, 5, "VO-999")).not.toThrow();
    });

  });

  [true, 100, "ABCDEF"].forEach((value: unknown) => {
    it(`should throw an error when passing an invalid value [${value}]`, () => {

      expect(() => new OptionalStringMaxLength(value as never, 5, "VO-999")).toThrow();
    });

  });
});

