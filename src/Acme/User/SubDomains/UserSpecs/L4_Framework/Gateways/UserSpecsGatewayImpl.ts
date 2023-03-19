import {UserSpecsGateway} from "../../L3_InterfaceAdapters/Gateway/UserSpecsGateway";
import {UserSpecs} from "../../L1_Entity/UserSpecs";
import {UserSpecsModel} from "../../L3_InterfaceAdapters/Model/UserSpecsModel";
import {UserSpecsFactory} from "../../L1_Entity/Factories/UserSpecsFactory";

export class UserSpecsGatewayImpl implements UserSpecsGateway {
  readonly #userSpecsModel: UserSpecsModel;
  readonly #userSpecsFactory: UserSpecsFactory;

  constructor(userSpecsModel: UserSpecsModel, userSpecsFactory: UserSpecsFactory) {
    this.#userSpecsModel = userSpecsModel;
    this.#userSpecsFactory = userSpecsFactory;
  }

  async save(userSpecs: UserSpecs): Promise<void> {
    const userSpecsPrimitives = this.#userSpecsFactory.toPrimitives(userSpecs);

    return this.#userSpecsModel.save(userSpecsPrimitives);
  }

}
