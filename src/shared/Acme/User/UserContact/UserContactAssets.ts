// L1
import {UserContactFactory} from "../../../../Acme/User/SubDomains/UserContact/L1_Entity/Factories/UserContactFactory";
// L3
import {
  UserContactModel
} from "../../../../Acme/User/SubDomains/UserContact/L3_InterfaceAdapters/Model/UserContactModel";
import {
  UserContactGateway
} from "../../../../Acme/User/SubDomains/UserContact/L3_InterfaceAdapters/Gateway/UserContactGateway";
// L4
import {
  UserContactModelImpl
} from "../../../../Acme/User/SubDomains/UserContact/L4_Framework/Models/UserContactModelImpl";
import {
  UserContactFactoryImpl
} from "../../../../Acme/User/SubDomains/UserContact/L4_Framework/Factories/UserContactFactoryImpl";
import {
  UserContactGatewayImpl
} from "../../../../Acme/User/SubDomains/UserContact/L4_Framework/Gateways/UserContactGatewayImpl";

import {postgreSQL} from "../../Shared/SQLAssets";

function userContactModel(): () => Promise<UserContactModel> {
  let contactModel: UserContactModel;

  return async (): Promise<UserContactModel> => {
    if (!contactModel) {
      const db = await postgreSQL();
      contactModel = new UserContactModelImpl(db);
    }

    return contactModel;
  }
}

export function userContactFactory(): () => UserContactFactory {
  let contactFactory: UserContactFactory;

  return (): UserContactFactory => {
    if (!contactFactory) {
      contactFactory = new UserContactFactoryImpl();
    }

    return contactFactory;
  }
}

function userContactGateway(userContactModel: () => Promise<UserContactModel>, userContactFactory: () => UserContactFactory)
  : () => Promise<UserContactGateway> {
  let contactGateway: UserContactGateway;

  return async (): Promise<UserContactGateway> => {
    if (!contactGateway) {
      const contactModel: UserContactModel = await userContactModel();
      const contactFactory: UserContactFactory = userContactFactory();

      contactGateway = new UserContactGatewayImpl(contactModel, contactFactory);
    }

    return contactGateway;
  }
}

export const userContactGatewayInstance: () => Promise<UserContactGateway>
  = userContactGateway(userContactModel(), userContactFactory());
