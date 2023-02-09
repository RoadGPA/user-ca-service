import {UserDB} from "./UserDB";

export class RedisDB implements UserDB {
  saveUser(name: string): string {
    console.log("Process.....");
    return "1000000-101232321";
  }
}
