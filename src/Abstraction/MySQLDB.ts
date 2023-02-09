import {UserDB} from "./UserDB";

export class MySQLDB implements UserDB {
  saveUser(name: string): string {
    return "patito";
  }

}
