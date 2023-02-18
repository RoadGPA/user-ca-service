import {Client} from "pg";

import {SQL} from "../Interfaces/SQL/SQL";
import {SQLConfigPrimitive} from "../Interfaces/SQL/SQLConfigPrimitive";

export class PgSQLImpl implements SQL {
  #client!: Client;

  async connect(config: SQLConfigPrimitive): Promise<void> {
    if (!this.#client) {
      this.#client = new Client(config);
      await this.#client.connect();
    }
  }

  async end(): Promise<void> {
    if (this.#client) {
      await this.#client.end();
    }
  }

  async query<R>(text: string, values?: Array<unknown>): Promise<any> {
    return this.#client.query(text, values) as R;
  }
}
