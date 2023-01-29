import {RequiredDateSpec} from "./RequiredDateSpec";

describe("RequiredDateSpec", () => {
  [null, undefined, true, "100", "2023-13-01", "2023/13/01", "2023-01-40", "2023/01/40", "2023-01-23T40:23:45.678+09:00", "2023-01-23T01:80:45.678+09:00"].forEach((value: unknown) => {
    it(`should not be satisfied when passing an invalid value [${value}]`, () => {
      const actual = new RequiredDateSpec().isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });

  ["2023-01-13", "2023-01-23T01:23:45.678+09:00", "2023-01-23T22:23:45.678+09:00"].forEach((value: unknown) => {
    it(`should be satisfied when passing a valid value [${value}]`, () => {
      const actual = new RequiredDateSpec().isSatisfiedBy(value as never);
      const expected = true;

      expect(actual).toStrictEqual(expected);
    });
  });
});
