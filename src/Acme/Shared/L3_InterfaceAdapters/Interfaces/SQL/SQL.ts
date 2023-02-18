import {SQLConfigPrimitive} from "./SQLConfigPrimitive";

export interface SQL {
  connect(config: SQLConfigPrimitive): Promise<void>;
  end(): Promise<void>;
  query<R>(text: string, values?: Array<unknown>): Promise<R>;
}
