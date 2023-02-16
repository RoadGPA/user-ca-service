import {UserContact} from "../UserContact";
import {UserContactPrimitive} from "../UserContactPrimitive";

export interface UserContactFactory {
  toEntity(userContact: UserContactPrimitive): UserContact;
  toPrimitives(userContact: UserContact): UserContactPrimitive
}
