import {EmailSpec} from "./EmailSpec";

describe("EmailSpec", () => {
  ["a.com", null, undefined, true, "a@a", "a@a@a.com", " ", ""].forEach((value: unknown) => {
    it(`should not be satisfied when passing an invalid value [${value}]`, () => {
      const actual = new EmailSpec().isSatisfiedBy(value as never);
      const expected = false;

      expect(actual).toStrictEqual(expected);
    });
  });

  ["a@a.com", "dev.a-1@domain.com", "a@domain.subdomain.dev", "a.d.3+1@domain.subdomain.dev"].forEach((value: unknown) => {
    it(`should be satisfied when passing a valid value [${value}]`, () => {
      const actual = new EmailSpec().isSatisfiedBy(value as never);
      const expected = true;

      expect(actual).toStrictEqual(expected);
    });
  });
});
