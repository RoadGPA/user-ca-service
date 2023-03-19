import {UserSpecsFactory} from "../../SubDomains/UserSpecs/L1_Entity/Factories/UserSpecsFactory";
import {UserContactFactory} from "../../SubDomains/UserContact/L1_Entity/Factories/UserContactFactory";

import {UserFactory} from "../../L1_Entity/Factories/UserFactory";
import {UserPrimitive} from "../../L1_Entity/UserPrimitive";
import {User} from "../../L1_Entity/User";

export class UserFactoryImpl implements UserFactory {
  readonly #userSpecsFactory: UserSpecsFactory;
  readonly #userContactFactory: UserContactFactory;

  constructor(userSpecsFactory: UserSpecsFactory, userContactFactory: UserContactFactory) {
    this.#userSpecsFactory = userSpecsFactory;
    this.#userContactFactory = userContactFactory;
  }

  toEntity(user: UserPrimitive): User {
    const userSpecs = this.#userSpecsFactory.toEntity(user.specs);
    const userContact = this.#userContactFactory.toEntity(user.contact);

    return new User(userSpecs, userContact);
  }

  toPrimitives(user: User): UserPrimitive {
    const userSpecs = this.#userSpecsFactory.toPrimitives(user.specs);
    const userContact = this.#userContactFactory.toPrimitives(user.contact);

    return {
      specs: userSpecs,
      contact: userContact
    }
  }
}
