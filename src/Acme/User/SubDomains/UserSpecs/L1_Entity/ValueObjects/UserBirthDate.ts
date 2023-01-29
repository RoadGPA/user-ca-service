import {RequiredDate} from "../../../../../Shared/L1_Entity/ValueObjects/RequiredDate";
import {EXCEPTION_CODE_USER_BIRTH_DATE} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserBirthDate extends RequiredDate {
  constructor(value: string) {
    super(value, EXCEPTION_CODE_USER_BIRTH_DATE);
  }
}
