import {Specification} from "./Specification";
import {IsStringSpec} from "./IsStringSpec";

describe("isStringSpec", () => {
  let isStringSpec: Specification<string>;

  beforeEach(() => {
    isStringSpec = new IsStringSpec();
  });

  ["", "ABC", "100", "true"].forEach((value: string) => {
    it(`should be satisfied by a valid value [${value}]`, () => {
      const actual = isStringSpec.isSatisfiedBy(value);
      const expected = true;

      expect(actual).toStrictEqual(expected);
    });
  });


  [null, undefined, true, 100].forEach((value: unknown) => {
    it(`should not be satisfied by an invalid value [${value}]`, () => {
      const actual = isStringSpec.isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });
})
