// L1
import {UserSpecsFactory} from "../../../../Acme/User/SubDomains/UserSpecs/L1_Entity/Factories/UserSpecsFactory";
// L3
import {
  UserSpecsGateway
} from "../../../../Acme/User/SubDomains/UserSpecs/L3_InterfaceAdapters/Gateway/UserSpecsGateway";
import {UserSpecsModel} from "../../../../Acme/User/SubDomains/UserSpecs/L3_InterfaceAdapters/Model/UserSpecsModel";
// L4
import {
  UserSpecsGatewayImpl
} from "../../../../Acme/User/SubDomains/UserSpecs/L4_Framework/Gateways/UserSpecsGatewayImpl";
import {UserSpecsModelImpl} from "../../../../Acme/User/SubDomains/UserSpecs/L4_Framework/Models/UserSpecsModelImpl";
import {
  UserSpecsFactoryImpl
} from "../../../../Acme/User/SubDomains/UserSpecs/L4_Framework/Factories/UserSpecsFactoryImpl";

import {postgreSQL} from "../../Shared/SQLAssets";

function userSpecsModel(): () => Promise<UserSpecsModel> {
  let specsModel: UserSpecsModel;

  return async (): Promise<UserSpecsModel> => {
    if (!specsModel) {
      const db = await postgreSQL();
      specsModel = new UserSpecsModelImpl(db);
    }

    return specsModel;
  }
}

export function userSpecsFactory(): () => UserSpecsFactory {
  let specsFactory: UserSpecsFactory;

  return (): UserSpecsFactory => {
    if (!specsFactory) {
      specsFactory = new UserSpecsFactoryImpl();
    }

    return specsFactory;
  }
}

function userSpecsGateway(userSpecsModel: () => Promise<UserSpecsModel>, userSpecsFactory: () => UserSpecsFactory)
  : () => Promise<UserSpecsGateway> {
  let specsGateway: UserSpecsGateway;

  return async (): Promise<UserSpecsGateway> => {
    if (!specsGateway) {
      const specsModel = await userSpecsModel();
      const specsFactory = userSpecsFactory();

      specsGateway = new UserSpecsGatewayImpl(specsModel, specsFactory);
    }

    return specsGateway;
  }
}

export const userSpecsGatewayInstance: () => Promise<UserSpecsGateway>
  = userSpecsGateway(userSpecsModel(), userSpecsFactory())
