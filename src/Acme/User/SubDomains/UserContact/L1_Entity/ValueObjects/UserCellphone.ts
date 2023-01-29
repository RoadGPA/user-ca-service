import {RequiredStringMaxLength} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredStringMaxLength";
import {EXCEPTION_CODE_USER_CELLPHONE} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserCellphone extends RequiredStringMaxLength {
  constructor(value: string) {
    super(value, 25, EXCEPTION_CODE_USER_CELLPHONE);
  }
}
