import {SQL} from "../../../Acme/Shared/L3_InterfaceAdapters/Interfaces/SQL/SQL";
import {PgSQLImpl} from "../../../Acme/Shared/L3_InterfaceAdapters/Adapters/PgSQLImpl";
import {SQLConfigPrimitive} from "../../../Acme/Shared/L3_InterfaceAdapters/Interfaces/SQL/SQLConfigPrimitive";

const pgConfig: SQLConfigPrimitive = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
}

let db: SQL;
async function dbInstance(pgConf: SQLConfigPrimitive): Promise<SQL> {
  if (!db) {
    db = new PgSQLImpl();
    await db.connect(pgConf);
  }

  return db;
}

export const postgreSQL =  async (): Promise<SQL> => await dbInstance(pgConfig);
