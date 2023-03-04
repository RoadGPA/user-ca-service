import {UserContact} from "../../L1_Entity/UserContact";
import {UserSpecsId} from "../../../../../Shared/User/SubDomains/UserSpecs/L1_Entity/ValueObjects/UserSpecsId";

export interface UserContactGateway {
  save(userId: UserSpecsId, userContact: UserContact): Promise<void>
}
