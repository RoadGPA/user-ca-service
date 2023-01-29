import {Specification} from "../Specifications/Specification";
import {RequiredDateSpec} from "../Specifications/RequiredDateSpec";
import {InvalidDate} from "../Exceptions/InvalidDate";

export class RequiredDate {
  readonly #value: string;
  readonly #code: string;

  readonly #requiredDateSpec: Specification<string>;

  constructor(value: string, code: string) {
    this.#requiredDateSpec = new RequiredDateSpec();
    this.#code = code;

    this.validate(value);
    this.#value = value;
  }

  private validate(value: string): void {
    if (!this.#requiredDateSpec.isSatisfiedBy(value)) {
      throw new InvalidDate(this.#code);
    }
  }

  get value(): string {
    return this.#value;
  }
}
