import {
  RequiredStringMaxLength
} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredStringMaxLength";
import {EXCEPTION_CODE_USER_NAME} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserSpecsName extends RequiredStringMaxLength {
  constructor(value: string) {
    super(value, 250, EXCEPTION_CODE_USER_NAME);
  }
}
