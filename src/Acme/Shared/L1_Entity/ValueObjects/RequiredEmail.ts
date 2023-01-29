import {Specification} from "../Specifications/Specification";
import {RequiredStringSpec} from "../Specifications/RequiredStringSpec";
import {EmailSpec} from "../Specifications/EmailSpec";
import {InvalidEmail} from "../Exceptions/InvalidEmail";

export class RequiredEmail {
  readonly #value: string;
  readonly #code: string;

  readonly #requiredStringSpec: Specification<string>;
  readonly #emailSpec: Specification<string>;

  constructor(value: string, code: string) {
    this.#code = code;
    this.#requiredStringSpec = new RequiredStringSpec();
    this.#emailSpec = new EmailSpec();

    this.validate(value);
    this.#value = value;
  }

  private validate(value: string): void {
    if (!this.valueObjectSpec().isSatisfiedBy(value)) {
      throw new InvalidEmail(this.#code);
    }
  }

  private valueObjectSpec() {
    return this.#requiredStringSpec.and(this.#emailSpec);
  }

  get value(): string {
    return this.#value;
  }
}
