import {UUIDV4} from "../../../../../Shared/L1_Entity/ValueObjects/UUIDV4";
import {EXCEPTION_CODE_USER_ID} from "../../../../../Shared/L1_Entity/Exceptions/ExceptionCodes";

export class UserContactId extends UUIDV4 {
  constructor(value: string) {
    super(value, EXCEPTION_CODE_USER_ID);
  }
}
