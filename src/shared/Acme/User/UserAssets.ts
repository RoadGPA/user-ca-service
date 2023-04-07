// L1
import {UserRepository} from "../../../Acme/User/L1_Entity/Repositories/UserRepository";
import {UserSpecsFactory} from "../../../Acme/User/SubDomains/UserSpecs/L1_Entity/Factories/UserSpecsFactory";
import {UserContactFactory} from "../../../Acme/User/SubDomains/UserContact/L1_Entity/Factories/UserContactFactory";
import {UserFactory} from "../../../Acme/User/L1_Entity/Factories/UserFactory";
// L3
import {UserSpecsGateway} from "../../../Acme/User/SubDomains/UserSpecs/L3_InterfaceAdapters/Gateway/UserSpecsGateway";
import {
  UserContactGateway
} from "../../../Acme/User/SubDomains/UserContact/L3_InterfaceAdapters/Gateway/UserContactGateway";
//L4
import {UserRepositoryImpl} from "../../../Acme/User/L4_Framework/Repositories/UserRepositoryImpl";
import {UserFactoryImpl} from "../../../Acme/User/L4_Framework/Factories/UserFactoryImpl";

import {userSpecsFactory, userSpecsGatewayInstance} from "./UserSpecs/UserSpecsAssets";
import {userContactFactory, userContactGatewayInstance} from "./UserContact/UserContactAssets";

function userFactory(userSpecsFactory: () => UserSpecsFactory, userContactFactory: () => UserContactFactory): () => UserFactory {
  let userFactory: UserFactory;

  return (): UserFactory => {
    if (!userFactory) {
      userFactory = new UserFactoryImpl(userSpecsFactory(), userContactFactory());
    }

    return userFactory;
  }
}

function userRepository(userSpecsGateway: Promise<UserSpecsGateway>, userContactGateway: Promise<UserContactGateway>): () => Promise<UserRepository> {
  let userRepository: UserRepository;

  return async (): Promise<UserRepository> => {
    if (!userRepository) {
      const specsGateway: UserSpecsGateway = await userSpecsGateway;
      const contactGateway: UserContactGateway = await userContactGateway;

      userRepository = new UserRepositoryImpl(specsGateway, contactGateway);
    }

    return userRepository;
  }
}

export const userFactoryInstance: () => UserFactory
  = userFactory(userSpecsFactory(), userContactFactory());

export const userRepositoryInstance: () => Promise<UserRepository>
  = userRepository(userSpecsGatewayInstance(), userContactGatewayInstance());
