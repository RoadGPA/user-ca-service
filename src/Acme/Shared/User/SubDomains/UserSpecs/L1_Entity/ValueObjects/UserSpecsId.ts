import {UUIDV4} from "../../../../../L1_Entity/ValueObjects/UUIDV4";
import {EXCEPTION_CODE_USER_ID} from "../../../../../L1_Entity/Exceptions/ExceptionCodes";

export class UserSpecsId extends UUIDV4 {
  constructor(value: string) {
    super(value, EXCEPTION_CODE_USER_ID);
  }
}
