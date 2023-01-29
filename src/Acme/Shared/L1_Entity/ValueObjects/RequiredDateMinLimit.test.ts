import {RequiredDateMinLimit} from "./RequiredDateMinLimit";
import {RequiredDate} from "./RequiredDate";

describe("RequiredDateMinLimit", () => {
  it("should throw when passing an invalid value", () => {
    const dateLimit = new RequiredDate("2023-01-01", "VO-999");

    expect(() => new RequiredDateMinLimit("2022-12-01", dateLimit, "VO-999")).toThrow();
  });

  it("should not throw when passing a valid value", () => {
    const dateLimit = new RequiredDate("2023-01-01", "VO-999");

    expect(() => new RequiredDateMinLimit("2023-01-02", dateLimit, "VO-999")).not.toThrow();
  });
});
