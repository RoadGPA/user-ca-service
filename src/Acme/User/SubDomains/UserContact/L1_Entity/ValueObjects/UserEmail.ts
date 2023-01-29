import {RequiredEmail} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredEmail";
import {EXCEPTION_CODE_USER_EMAIL} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserEmail extends RequiredEmail {
  constructor(value: string) {
    super(value, EXCEPTION_CODE_USER_EMAIL);
  }
}
