import {Specification} from "../Specifications/Specification";
import {RequiredStringSpec} from "../Specifications/RequiredStringSpec";
import {StringMaxLengthSpec} from "../Specifications/StringMaxLengthSpec";
import {AndSpecification} from "../Specifications/AndSpecification";
import {InvalidRequiredStringMaxLength} from "../Exceptions/InvalidRequiredStringMaxLength";

export class RequiredStringMaxLength {
  readonly #value: string;
  readonly #code: string;

  #requiredStringSpec: Specification<string>;
  #stringMaxLengthSpec: Specification<string>;

  constructor(value: string, maxLength: number, code: string) {
    this.#code = code;
    this.#requiredStringSpec = new RequiredStringSpec();
    this.#stringMaxLengthSpec = new StringMaxLengthSpec(maxLength);

    this.validate(value);
    this.#value = value;
  }

  get value(): string {
    return this.#value;
  }

  private validate(value: string): void {
    if (!this.valueObjectSpec().isSatisfiedBy(value)) {
      throw new InvalidRequiredStringMaxLength(this.#code);
    }
  }

  private valueObjectSpec(): Specification<string> {
    return new AndSpecification(this.#requiredStringSpec, this.#stringMaxLengthSpec)
  }

}
