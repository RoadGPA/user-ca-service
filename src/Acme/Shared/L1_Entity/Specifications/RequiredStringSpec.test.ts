import {Specification} from "./Specification";
import {RequiredStringSpec} from "./RequiredStringSpec";

describe("isStringSpec", () => {
  let requiredStringSpec: Specification<string>;

  beforeEach(() => {
    requiredStringSpec = new RequiredStringSpec();
  });

  ["ABC", "100", "true"].forEach((value: string) => {
    it(`should be satisfied by a valid value [${value}]`, () => {
      const actual = requiredStringSpec.isSatisfiedBy(value);
      const expected = true;

      expect(actual).toStrictEqual(expected);
    });
  });


  ["", null, undefined, true, 100].forEach((value: unknown) => {
    it(`should not be satisfied by an invalid value [${value}]`, () => {
      const actual = requiredStringSpec.isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });
})
