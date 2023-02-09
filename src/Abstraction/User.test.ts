import { User } from "./User";
import { UserDBImplMock } from "./UserDBImpl.mock";
import { UserDB } from "./UserDB";

describe("User", () => {

  it("Should save a User in the db", () => {
    const mockDB: UserDB = new UserDBImplMock();
    jest.spyOn(mockDB, "saveUser").mockReturnValue("Pérez");

    const user = new User(mockDB);

    const actual = user.save("Steven");

    expect(actual).toStrictEqual("Pérez");
  });
});
