import {UserRepository} from "../L1_Entity/Repositories/UserRepository";
import {User} from "../L1_Entity/User";

export class SaveUserUseCase {
  readonly #userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.#userRepository = userRepository;
  }

  public async execute(user: User): Promise<void> {
    await this.#userRepository.save(user);
  }
}
