import {UserSpecsPrimitive} from "../UserSpecsPrimitive";
import {UserSpecs} from "../UserSpecs";

export interface UserSpecsFactory {
  toEntity(userSpecs: UserSpecsPrimitive): UserSpecs;
  toPrimitives(userSpecs: UserSpecs): UserSpecsPrimitive;
}
