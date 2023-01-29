import {UserCellphone} from "./ValueObjects/UserCellphone";
import {UserEmail} from "./ValueObjects/UserEmail";

export class UserContact {
  readonly #cellphone: UserCellphone;
  readonly #email: UserEmail;

  constructor(cellphone: UserCellphone, email: UserEmail) {
    this.#cellphone = cellphone;
    this.#email = email;
  }

  get cellphone(): UserCellphone {
    return this.#cellphone;
  }

  get email(): UserEmail {
    return this.#email;
  }
}
