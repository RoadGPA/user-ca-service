import {Specification} from "../Specifications/Specification";
import {RequiredStringSpec} from "../Specifications/RequiredStringSpec";

export abstract class RequiredString<E extends Error> {
  readonly #value: string;
  protected readonly requiredStringSpec: Specification<string> = new RequiredStringSpec();

  constructor(value: string, error: E) {
    this.validate(value, error);
    this.#value = value;
  }

  get value(): string {
    return this.#value;
  }

  private validate(value: string, error: E): void {
    if (!this.requiredStringSpec.isSatisfiedBy(value)) {
      throw error;
    }
  }
}
