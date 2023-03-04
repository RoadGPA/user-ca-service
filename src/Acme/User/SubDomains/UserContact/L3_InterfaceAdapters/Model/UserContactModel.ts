import {UserContactPrimitive} from "../../L1_Entity/UserContactPrimitive";

export interface UserContactModel {
  save(userId: string, userContact: UserContactPrimitive): Promise<void>;
}
