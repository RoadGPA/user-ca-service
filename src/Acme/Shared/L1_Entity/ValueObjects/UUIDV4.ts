import { v4 } from "uuid";

import {UUIDV4Spec} from "../Specifications/UUIDV4Spec";
import {InvalidUUIDV4} from "../Exceptions/InvalidUUIDV4";

export class UUIDV4 {
  readonly #value: string;
  readonly #code: string;

  readonly #uuidV4Spec: UUIDV4Spec;

  constructor(value: string, code: string) {
    this.#code = code;

    this.#uuidV4Spec = new UUIDV4Spec();

    this.validate(value);
    this.#value = value;
  }

  private validate(value: string): void {
    if (!this.#uuidV4Spec.isSatisfiedBy(value)) {
      throw new InvalidUUIDV4(this.#code)
    }
  }

  get value(): string {
    return this.#value;
  }

  static create(): string {
    return v4();
  }
}
