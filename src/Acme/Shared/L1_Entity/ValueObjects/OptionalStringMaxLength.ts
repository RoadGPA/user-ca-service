import {Specification} from "../Specifications/Specification";
import {StringMaxLengthSpec} from "../Specifications/StringMaxLengthSpec";
import {OptionalStringSpec} from "../Specifications/OptionalStringSpec";
import {IsStringSpec} from "../Specifications/IsStringSpec";

import {InvalidOptionalStringMaxLength} from "../Exceptions/InvalidOptionalStringMaxLength";

export class OptionalStringMaxLength {
  readonly #value: string | null | undefined;
  readonly #code: string;
  #optionalStringSpec: Specification<string | null | undefined>;
  #isStringSpec: Specification<string>;
  #stringMaxLengthSpec: Specification<string>;

  constructor(value: string | null | undefined, maxLength: number, code: string) {
    this.#code = code;

    this.#isStringSpec = new IsStringSpec();
    this.#optionalStringSpec = new OptionalStringSpec();
    this.#stringMaxLengthSpec = new StringMaxLengthSpec(maxLength);

    this.validate(value);
    this.#value = value;
  }

  get value(): string | null | undefined {
    return this.#value;
  }

  private validate(value: string | null | undefined): void {
    const isOptionalStringOk = this.#optionalStringSpec.isSatisfiedBy(value);
    const isStringMaxLengthOk = this.valueObjectAndStringSpec().isSatisfiedBy(value || "");

    if (!isOptionalStringOk) {
      throw new InvalidOptionalStringMaxLength(this.#code);
    }

    if (!isStringMaxLengthOk) {
      throw new InvalidOptionalStringMaxLength(this.#code);
    }
  }

  private valueObjectAndStringSpec(): Specification<string> {
    return this.#isStringSpec.and(this.#stringMaxLengthSpec);
  }
}
