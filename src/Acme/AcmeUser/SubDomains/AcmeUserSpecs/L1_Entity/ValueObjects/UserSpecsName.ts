import {RequiredString} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredString";

export class UserSpecsName extends RequiredString<Error>{
  constructor(value: string) {
    super(value, new Error("User Name is invalid"));
  }
}
