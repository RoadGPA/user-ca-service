import {RequiredStringMaxLength} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredStringMaxLength";
import {EXCEPTION_CODE_USER_LAST_NAME} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserLastName extends RequiredStringMaxLength {
  constructor(value: string) {
    super(value, 250, EXCEPTION_CODE_USER_LAST_NAME);
  }
}
