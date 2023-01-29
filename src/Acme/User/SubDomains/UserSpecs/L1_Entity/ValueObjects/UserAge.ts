import {RequiredNumberMinMaxLimit} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredNumberMinMaxLimit";
import {EXCEPTION_CODE_USER_AGE} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserAge extends RequiredNumberMinMaxLimit {
  constructor(value: number) {
    super(value, 13, 120, EXCEPTION_CODE_USER_AGE);
  }
}
