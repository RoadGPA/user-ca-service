import {UserDB} from "./UserDB";

export class User {
  #db: UserDB;

  constructor(userDB: UserDB) {
    this.#db = userDB;
  }

  save(name: string): string {
    return this.#db.saveUser(name);
  }
}
