import {UserSpecsName} from "./ValueObjects/UserSpecsName";

export class AcmeUserSpecs {
  readonly #id: string;
  readonly #name: UserSpecsName;
  readonly #middleName?: string;
  readonly #firstName: string;
  readonly #lastName: string;
  readonly #age: number;
  readonly #birthDate: Date;

  constructor(name: UserSpecsName) {
    this.#name = name;
  }

  get name(): UserSpecsName {
    return this.#name;
  }
}
