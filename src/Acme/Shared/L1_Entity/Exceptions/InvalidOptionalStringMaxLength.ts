export class InvalidOptionalStringMaxLength extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`Invalid optional string value`);
    this.name = "[InvalidOptionalStringMaxLength]";
    this.code = code;
  }
}
