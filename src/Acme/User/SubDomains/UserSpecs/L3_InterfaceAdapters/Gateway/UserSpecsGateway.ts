import {UserSpecs} from "../../L1_Entity/UserSpecs";

export interface UserSpecsGateway {
  save(userSpecs: UserSpecs): Promise<void>
}
