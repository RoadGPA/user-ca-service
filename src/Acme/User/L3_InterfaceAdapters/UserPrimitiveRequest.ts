import {UserSpecsPrimitive} from "../SubDomains/UserSpecs/L1_Entity/UserSpecsPrimitive";
import {UserContactPrimitive} from "../SubDomains/UserContact/L1_Entity/UserContactPrimitive";

export type UserPrimitiveRequest  = {
  specs: Omit<UserSpecsPrimitive, "id">,
  contact: Omit<UserContactPrimitive, "id">
}
