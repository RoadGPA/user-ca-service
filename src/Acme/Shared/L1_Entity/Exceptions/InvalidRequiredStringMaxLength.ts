export class InvalidRequiredStringMaxLength extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`Invalid required string value`);
    this.name = "[InvalidRequiredStringMaxLength]";
    this.code = code;
  }
}
