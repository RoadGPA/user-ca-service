import {UserContactFactory} from "../../L1_Entity/Factories/UserContactFactory";
import {UserContact} from "../../L1_Entity/UserContact";
import {UserContactId} from "../../L1_Entity/ValueObjects/UserContactId";
import {UserCellphone} from "../../L1_Entity/ValueObjects/UserCellphone";
import {UserEmail} from "../../L1_Entity/ValueObjects/UserEmail";
import {UserContactPrimitive} from "../../L1_Entity/UserContactPrimitive";

export class UserContactFactoryImpl implements UserContactFactory {
  toEntity(userContact: UserContactPrimitive): UserContact {
    return new UserContact(
      new UserContactId(userContact.id),
      new UserCellphone(userContact.cellphone),
      new UserEmail(userContact.email)
    );
  }

  toPrimitives(userContact: UserContact): UserContactPrimitive {
    return {
      id: userContact.id.value,
      email: userContact.email.value,
      cellphone: userContact.cellphone.value
    };
  }
}
