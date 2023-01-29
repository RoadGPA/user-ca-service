import {Specification} from "../Specifications/Specification";
import {RequiredDateSpec} from "../Specifications/RequiredDateSpec";

import {RequiredDate} from "./RequiredDate";
import {MinDateLimitSpec} from "../Specifications/MinDateLimitSpec";
import {InvalidRequiredDateMinLimit} from "../Exceptions/InvalidRequiredDateMinLimit";


export class RequiredDateMinLimit {
  readonly #value: string;
  readonly #code: string;

  readonly #requiredDateSpec: Specification<string>;
  readonly #minDateLimitSpec: Specification<string>;

  constructor(value: string, minDateLimit: RequiredDate, code: string) {
    this.#code = code;
    this.#requiredDateSpec = new RequiredDateSpec();
    this.#minDateLimitSpec = new MinDateLimitSpec(minDateLimit.value);

    this.validate(value);
    this.#value = value;
  }

  private validate(value: string): void {
    if (!this.valueObjectSpec().isSatisfiedBy(value)) {
      throw new InvalidRequiredDateMinLimit(this.#code);
    }
  }

  private valueObjectSpec(): Specification<string> {
    return this.#requiredDateSpec.and(this.#minDateLimitSpec);
  }

  get value(): string {
    return this.#value;
  }
}
