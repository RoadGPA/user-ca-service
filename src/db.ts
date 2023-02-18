import {UUIDV4} from "./Acme/Shared/L1_Entity/ValueObjects/UUIDV4";

require('dotenv').config()

import {SQL} from "./Acme/Shared/L3_InterfaceAdapters/Interfaces/SQL/SQL";
import {PgSQLImpl} from "./Acme/Shared/L3_InterfaceAdapters/Adapters/PgSQLImpl";
import {SQLConfigPrimitive} from "./Acme/Shared/L3_InterfaceAdapters/Interfaces/SQL/SQLConfigPrimitive";
import {QueryResult} from "pg";

const pgConfig: SQLConfigPrimitive = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
}

console.log("pgConfig", pgConfig);

async function demo() {
  const db: SQL = new PgSQLImpl()

  try {
    await db.connect(pgConfig);

    const text = `
        INSERT INTO acmedb.user.specification (federated_id, name, middle_name, first_name, last_name, age, birth_date)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id
    `;

    const userId = UUIDV4.create();
    const values: Array<unknown> = [userId, "Steven", "Middle", "Pérez", "Last Name", 99, "1900-08-08"];

    const newUser = await db.query<QueryResult>(text, values);
    console.log("newUser", newUser.rows[0].id);

    const contactText = `
        INSERT INTO acmedb.user.contact (federated_id, specification_federated_id, cellphone, email)
        VALUES ($1, $2, $3, $4)
    `;

    const contactValues: Array<unknown> = [UUIDV4.create(), userId, "89091201", "email@email.com"];

    await db.query(contactText, contactValues);
  } catch (err) {
    console.error((err as Error).message)
  } finally {
    await db.end();
    console.log("Test was completed");
  }
}

demo();
