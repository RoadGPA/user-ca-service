import {UserRepository} from "../L1_Entity/Repositories/UserRepository";
import {UserPrimitive} from "../L1_Entity/UserPrimitive";
import {UserFactory} from "../L1_Entity/Factories/UserFactory";

import {SaveUserUseCase} from "../L2_Application/SaveUserUseCase";
import {UserPrimitiveRequest} from "./UserPrimitiveRequest";
import {UUIDV4} from "../../Shared/L1_Entity/ValueObjects/UUIDV4";

export class SaveUserController {
  readonly #saveUserUseCase: SaveUserUseCase;
  readonly #userFactory: UserFactory;

  constructor(userRepository: UserRepository, userFactory: UserFactory) {
    this.#saveUserUseCase = new SaveUserUseCase(userRepository);
    this.#userFactory = userFactory;
  }

  public async execute(user: UserPrimitiveRequest): Promise<void> {
    const userId = UUIDV4.create();

    const userPrimitive: UserPrimitive = {
      specs: {...user.specs, id: userId},
      contact: {...user.contact, id: userId},
    };

    const _user = this.#userFactory.toEntity(userPrimitive);

    await this.#saveUserUseCase.execute(_user);
  }
}
