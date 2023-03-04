import {UserSpecsId} from "../../../../../Shared/User/SubDomains/UserSpecs/L1_Entity/ValueObjects/UserSpecsId";

import {UserContact} from "../../L1_Entity/UserContact";
import {UserContactFactory} from "../../L1_Entity/Factories/UserContactFactory";

import {UserContactGateway} from "../../L3_InterfaceAdapters/Gateway/UserContactGateway";
import {UserContactModel} from "../../L3_InterfaceAdapters/Model/UserContactModel";

export class UserContactGatewayImpl implements UserContactGateway {
  readonly #userContactModel: UserContactModel;
  readonly #userContactFactory: UserContactFactory;

  constructor(userContactModel: UserContactModel, userContactFactory: UserContactFactory) {
    this.#userContactModel = userContactModel;
    this.#userContactFactory = userContactFactory;
  }
  async save(userId: UserSpecsId, userContact: UserContact): Promise<void> {
    const userContactPrimitive = this.#userContactFactory.toPrimitives(userContact);

    await this.#userContactModel.save(userId.value, userContactPrimitive);
  }
}
