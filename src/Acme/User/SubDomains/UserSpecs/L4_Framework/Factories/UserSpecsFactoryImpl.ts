import {UserSpecsFactory} from "../../L1_Entity/Factories/UserSpecsFactory";
import {UserSpecsPrimitive} from "../../L1_Entity/UserSpecsPrimitive";
import {UserSpecs} from "../../L1_Entity/UserSpecs";
import {UserSpecsId} from "../../../../../Shared/User/SubDomains/UserSpecs/L1_Entity/ValueObjects/UserSpecsId";
import {UserName} from "../../L1_Entity/ValueObjects/UserName";
import {UserMiddleName} from "../../L1_Entity/ValueObjects/UserMiddleName";
import {UserFirstName} from "../../L1_Entity/ValueObjects/UserFirstName";
import {UserLastName} from "../../L1_Entity/ValueObjects/UserLastName";
import {UserAge} from "../../L1_Entity/ValueObjects/UserAge";
import {UserBirthDate} from "../../L1_Entity/ValueObjects/UserBirthDate";

export class UserSpecsFactoryImpl implements UserSpecsFactory {
  toEntity(userSpecs: UserSpecsPrimitive): UserSpecs {
    return new UserSpecs(
      new UserSpecsId(userSpecs.id),
      new UserName(userSpecs.name),
      new UserMiddleName(userSpecs.middleName),
      new UserFirstName(userSpecs.firstName),
      new UserLastName(userSpecs.lastName),
      new UserAge(userSpecs.age),
      new UserBirthDate(userSpecs.birthDate)
    );
  }

  toPrimitives(userSpecs: UserSpecs): UserSpecsPrimitive {
    return {
      id: userSpecs.id.value,
      name: userSpecs.name.value,
      middleName: userSpecs.middleName.value,
      firstName: userSpecs.firstName.value,
      lastName: userSpecs.lastName.value,
      age: userSpecs.age.value,
      birthDate: userSpecs.birthDate.value,
    };
  }

}
