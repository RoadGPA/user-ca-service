import {OptionalStringMaxLength} from "../../../../../Shared/L1_Entity/ValueObjects/OptionalStringMaxLength";
import {EXCEPTION_CODE_USER_MIDDLE_NAME} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserMiddleName extends OptionalStringMaxLength {
  constructor(value: string | null | undefined) {
    super(value, 250, EXCEPTION_CODE_USER_MIDDLE_NAME);
  }
}
