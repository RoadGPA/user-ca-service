import {UUIDV4Spec} from "./UUIDV4Spec";
import {UUIDV4} from "../ValueObjects/UUIDV4";

describe("UUIDV4Spec", () => {
  [null, undefined, true, 100, "", "ABC", "710b962e-041c-11e1-9234-0123456789ab"].forEach((value: unknown) => {
    it(`should not be satisfied when passing an invalid value [${value}]`, () => {
      const actual = new UUIDV4Spec().isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });

  it("should be satisfied when passing a valid value", () => {
    const uuidV4 = UUIDV4.create();

    const actual = new UUIDV4Spec().isSatisfiedBy(uuidV4);
    const expected = true;

    expect(actual).toStrictEqual(expected);
  });
});
