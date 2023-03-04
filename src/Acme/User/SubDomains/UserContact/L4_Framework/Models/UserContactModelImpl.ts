import {UserContactPrimitive} from "../../L1_Entity/UserContactPrimitive";

import {UserContactModel} from "../../L3_InterfaceAdapters/Model/UserContactModel";
import {SQL} from "../../../../../Shared/L3_InterfaceAdapters/Interfaces/SQL/SQL";

export class UserContactModelImpl implements UserContactModel {
  readonly #db: SQL;

  constructor(db: SQL) {
    this.#db = db;
  }

  async save(userId: string, userContact: UserContactPrimitive): Promise<void> {
    const saveContactQuery = `
        INSERT INTO acmedb.user.contact (federated_id, specification_federated_id, cellphone, email)
        VALUES ($1, $2, $3, $4)
    `;
    const saveContactValues = [userContact.id, userId, userContact.cellphone, userContact.email];

    await this.#db.query(saveContactQuery, saveContactValues);
  }
}
