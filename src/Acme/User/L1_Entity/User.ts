import {UserSpecs} from "../SubDomains/UserSpecs/L1_Entity/UserSpecs";
import {UserContact} from "../SubDomains/UserContact/L1_Entity/UserContact";

export class User {
  readonly #specs: UserSpecs;
  readonly #contact: UserContact;

  constructor(specs: UserSpecs, contact: UserContact) {
    this.#specs = specs;
    this.#contact = contact;
  }

  get specs(): UserSpecs {
    return this.#specs;
  }

  get contact(): UserContact {
    return this.#contact;
  }
}
