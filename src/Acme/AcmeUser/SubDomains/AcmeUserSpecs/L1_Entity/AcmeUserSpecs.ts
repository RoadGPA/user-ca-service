import {UserSpecsName} from "./ValueObjects/UserSpecsName";
import {UserSpecsFirstName} from "./ValueObjects/UserSpecsFirstName";

export class AcmeUserSpecs {
  readonly #id: string;
  readonly #name: UserSpecsName;
  readonly #middleName?: string;
  readonly #firstName: UserSpecsFirstName;
  readonly #lastName: string;
  readonly #age: number;
  readonly #birthDate: Date;

  constructor(name: UserSpecsName, firstName: UserSpecsFirstName) {
    this.#name = name;
    this.#firstName = firstName;
  }

  get name(): UserSpecsName {
    return this.#name;
  }

  get firstName(): UserSpecsFirstName {
    return this.#firstName;
  }
}
