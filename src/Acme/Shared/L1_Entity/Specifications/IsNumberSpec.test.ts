import {Specification} from "./Specification";
import {IsNumberSpec} from "./IsNumberSpec";

describe("IsNumberSpec", () => {
  let isNumberSpec: Specification<number>;

  beforeEach(() => {
    isNumberSpec = new IsNumberSpec();
  });

  [100, -1000, 0, Number.MAX_VALUE, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((value: number) => {
    it(`should be satisfied by a valid value [${value}]`, () => {
      const actual = isNumberSpec.isSatisfiedBy(value);
      const expected = true;

      expect(actual).toStrictEqual(expected);
    });
  });


  [null, undefined, true, NaN, Number.MIN_VALUE].forEach((value: unknown) => {
    it(`should not be satisfied by an invalid value [${value}]`, () => {
      const actual = isNumberSpec.isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });
});
