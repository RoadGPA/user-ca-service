import {QueryResult} from "pg";

import {UserSpecsPrimitive} from "../../L1_Entity/UserSpecsPrimitive";

import {UserSpecsModel} from "../../L3_InterfaceAdapters/Model/UserSpecsModel";
import {SQL} from "../../../../../Shared/L3_InterfaceAdapters/Interfaces/SQL/SQL";

export class UserSpecsModelImpl implements UserSpecsModel {
  #db: SQL;

  constructor(db: SQL) {
    this.#db = db;
  }

  async save(userSpecs: UserSpecsPrimitive): Promise<void> {
    const saveUserSpecsQuery = `
        INSERT INTO acmedb.user.specification (federated_id, name, middle_name, first_name, last_name, age, birth_date)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    const saveUserSpecsValues: Array<unknown> = [
      userSpecs.id,
      userSpecs.name,
      userSpecs.middleName,
      userSpecs.firstName,
      userSpecs.lastName,
      userSpecs.age,
      userSpecs.birthDate,
    ];

    await this.#db.query<QueryResult>(saveUserSpecsQuery, saveUserSpecsValues);
  }

}
