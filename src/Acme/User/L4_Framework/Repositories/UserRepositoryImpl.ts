import {UserRepository} from "../../L1_Entity/Repositories/UserRepository";
import {User} from "../../L1_Entity/User";
import {UserSpecsGateway} from "../../SubDomains/UserSpecs/L3_InterfaceAdapters/Gateway/UserSpecsGateway";
import {UserContactGateway} from "../../SubDomains/UserContact/L3_InterfaceAdapters/Gateway/UserContactGateway";

export class UserRepositoryImpl implements UserRepository {
  readonly #userSpecsGateway: UserSpecsGateway;
  readonly #userContactGateway: UserContactGateway;

  constructor(userSpecsGateway: UserSpecsGateway, userContactGateway: UserContactGateway) {
    this.#userSpecsGateway = userSpecsGateway;
    this.#userContactGateway = userContactGateway;
  }

  async save(user: User): Promise<void> {
    await this.#userSpecsGateway.save(user.specs);
    await this.#userContactGateway.save(user.specs.id, user.contact);
  }
}
