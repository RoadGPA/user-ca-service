import {UUIDV4} from "./UUIDV4";

describe("UUID V4", () => {
  [null, undefined, true, 100, "", "ABC", "710b962e-041c-11e1-9234-0123456789ab"].forEach((value: unknown) => {
    it(`should throw when passing an invalid value [${value}]`, () => {
      expect(() => new UUIDV4(value as never, "VO-999")).toThrow();
    });
  });

  it("should not throw when passing a valid value", () => {
    const uuidV4 = UUIDV4.create();
    expect(() => new UUIDV4(uuidV4, "VO-999")).not.toThrow();
  });
});
