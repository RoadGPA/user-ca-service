export class InvalidNumberRangeLimits extends Error {
  readonly code: string;

  constructor(code: string) {
    super("Invalid number");
    this.name = "[InvalidNumberRangeLimits]";
    this.code = code;
  }
}
