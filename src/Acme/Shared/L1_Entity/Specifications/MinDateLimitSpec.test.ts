import {MinDateLimitSpec} from "./MinDateLimitSpec";

describe("MinDateLimitSpec", () => {
  ["2023-01-23T00:59:46", "2023-01-23T01:00:45"].forEach((value: unknown) => {
    it(`should be satisfied when passing a valid value [${value}]`, () => {
      const actual = new MinDateLimitSpec("2023-01-23T00:59:45").isSatisfiedBy(value as never);
      const expected = true;

      expect(actual).toStrictEqual(expected);
    });
  });

  ["2023-01-23T00:59:44", "2023-01-01T01:00:00"].forEach((value: unknown) => {
    it(`should not be satisfied when passing an invalid value [${value}]`, () => {
      const actual = new MinDateLimitSpec("2023-01-23T00:59:45").isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });

});
