import {UserSpecsPrimitive} from "../../L1_Entity/UserSpecsPrimitive";

export interface UserSpecsModel {
  save(userSpecs: UserSpecsPrimitive): Promise<void>;
}
