import {UserDB} from "./UserDB";

export class UserDBImplMock implements UserDB {
  saveUser(name: string): string {
    return "abc";
  }

}
