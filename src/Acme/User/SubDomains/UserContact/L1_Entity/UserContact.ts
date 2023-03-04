import {UserCellphone} from "./ValueObjects/UserCellphone";
import {UserEmail} from "./ValueObjects/UserEmail";
import {UserContactId} from "./ValueObjects/UserContactId";

export class UserContact {
  readonly #id: UserContactId;
  readonly #cellphone: UserCellphone;
  readonly #email: UserEmail;

  constructor(id: UserContactId, cellphone: UserCellphone, email: UserEmail) {
    this.#id = id;
    this.#cellphone = cellphone;
    this.#email = email;
  }

  get id(): UserContactId {
    return this.#id;
  }

  get cellphone(): UserCellphone {
    return this.#cellphone;
  }

  get email(): UserEmail {
    return this.#email;
  }
}
