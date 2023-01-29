import {IsNumberSpec} from "../Specifications/IsNumberSpec";
import {NumberMaxLimitSpec} from "../Specifications/NumberMaxLimitSpec";
import {NumberMinLimitSpec} from "../Specifications/NumberMinLimitSpec";
import {Specification} from "../Specifications/Specification";

import {InvalidNumberRangeLimits} from "../Exceptions/InvalidNumberRangeLimits";

export class RequiredNumberMinMaxLimit {
  readonly #value: number;
  readonly #code: string;

  readonly #isNumberSpec: Specification<number>;
  readonly #numberMaxLimitSpec: Specification<number>;
  readonly #numberMinLimitSpec: Specification<number>;

  constructor(value: number, minLimit: number, maxLimit: number, code: string) {
    this.#isNumberSpec = new IsNumberSpec();
    this.#numberMaxLimitSpec = new NumberMaxLimitSpec(maxLimit);
    this.#numberMinLimitSpec = new NumberMinLimitSpec(minLimit);
    this.#code = code;

    this.validate(value);
    this.#value = value;
  }

  private validate(value: number): void {
    if (!this.valueObjectSpec().isSatisfiedBy(value)) {
      throw new InvalidNumberRangeLimits(this.#code);
    }
  }

  private valueObjectSpec(): Specification<number> {
    return this.#isNumberSpec.and(this.#numberMinLimitSpec).and(this.#numberMaxLimitSpec);
  }

  get value(): number {
    return this.#value;
  }
}
