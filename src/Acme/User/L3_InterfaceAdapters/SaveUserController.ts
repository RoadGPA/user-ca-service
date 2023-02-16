import {UserRepository} from "../L1_Entity/Repositories/UserRepository";
import {UserPrimitive} from "../L1_Entity/UserPrimitive";
import {UserFactory} from "../L1_Entity/Factories/UserFactory";

import {SaveUserUseCase} from "../L2_Application/SaveUserUseCase";

export class SaveUserController {
  readonly #saveUserUseCase: SaveUserUseCase;
  readonly #userFactory: UserFactory;

  constructor(userRepository: UserRepository, userFactory: UserFactory) {
    this.#saveUserUseCase = new SaveUserUseCase(userRepository);
    this.#userFactory = userFactory;
  }

  public async execute(user: UserPrimitive): Promise<void> {
    const _user = this.#userFactory.toEntity(user);

    await this.#saveUserUseCase.execute(_user);
  }
}
