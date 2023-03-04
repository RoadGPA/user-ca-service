import {UserSpecsId} from "../../../../Shared/User/SubDomains/UserSpecs/L1_Entity/ValueObjects/UserSpecsId";

import {UserName} from "./ValueObjects/UserName";
import {UserFirstName} from "./ValueObjects/UserFirstName";
import {UserLastName} from "./ValueObjects/UserLastName";
import {UserMiddleName} from "./ValueObjects/UserMiddleName";
import {UserAge} from "./ValueObjects/UserAge";
import {UserBirthDate} from "./ValueObjects/UserBirthDate";

export class UserSpecs {
  readonly #id: UserSpecsId;
  readonly #name: UserName;
  readonly #middleName: UserMiddleName;
  readonly #firstName: UserFirstName;
  readonly #lastName: UserLastName;
  readonly #age: UserAge;
  readonly #birthDate: UserBirthDate;

  constructor(id: UserSpecsId, name: UserName, middleName: UserMiddleName, firstName: UserFirstName, lastName: UserLastName, age: UserAge, birthDate: UserBirthDate) {
    this.#id = id;
    this.#name = name;
    this.#middleName = middleName;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#birthDate = birthDate;
  }

  get id(): UserSpecsId {
    return this.#id;
  }

  get name(): UserName {
    return this.#name;
  }

  get middleName(): UserMiddleName {
    return this.#middleName;
  }

  get firstName(): UserFirstName {
    return this.#firstName;
  }

  get lastName(): UserLastName {
    return this.#lastName;
  }

  get age(): UserAge {
    return this.#age;
  }

  get birthDate(): UserBirthDate {
    return this.#birthDate;
  }
}
