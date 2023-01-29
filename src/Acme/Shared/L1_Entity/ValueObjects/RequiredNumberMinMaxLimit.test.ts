import {RequiredNumberMinMaxLimit} from "./RequiredNumberMinMaxLimit";

describe("RequiredNumberMinMaxLimit", () => {
  it("should not throw when passing valid values", () => {
    expect(() => new RequiredNumberMinMaxLimit(50, 10, 100, "VO-999")).not.toThrow();
  });

  it("should not throw when min is equal to the min limit", () => {
    expect(() => new RequiredNumberMinMaxLimit(1, 1, 5, "VO-999")).not.toThrow();
  });

  it("should not throw when max is equal to the max limit", () => {
    expect(() => new RequiredNumberMinMaxLimit(5, 1, 5, "VO-999")).not.toThrow();
  });

  it("should throw when min is under the limit", () => {
    expect(() => new RequiredNumberMinMaxLimit(2, 3, 100, "VO-999")).toThrow();
  });

  it("should throw when max is exceeding the limit", () => {
    expect(() => new RequiredNumberMinMaxLimit(5, 1, 4, "VO-999")).toThrow();
  });
});
