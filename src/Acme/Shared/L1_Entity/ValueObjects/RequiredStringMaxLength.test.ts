import {RequiredStringMaxLength} from "./RequiredStringMaxLength";

describe("RequiredStringMaxLength", () => {
  ["ABCDE"].forEach((value: unknown) => {
    it(`should not throw an error when passing a valid value [${value}]`, () => {

      expect(() => new RequiredStringMaxLength(value as never, 5, "VO-999")).not.toThrow();
    });

    [null, undefined, true, "", " ", "ABCDEF"].forEach((value: unknown) => {
      it(`should throw an error when passing an invalid value [${value}]`, () => {

        expect(() => new RequiredStringMaxLength(value as never, 5, "VO-999")).toThrow();
      });

    });
  });
});

