import {User} from "../User";
import {UserPrimitive} from "../UserPrimitive";

export interface UserFactory {
  toEntity(user: UserPrimitive): User;
  toPrimitives(user: User): UserPrimitive;
}
