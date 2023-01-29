export class InvalidRequiredDateMinLimit extends Error {
  readonly code: string;

  constructor(code: string) {
    super("Invalid required date with min limit");
    this.name = "[InvalidRequiredDateMinLimit]";
    this.code = code;
  }
}
