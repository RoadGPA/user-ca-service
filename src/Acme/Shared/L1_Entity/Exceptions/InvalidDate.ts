export class InvalidDate extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`Invalid date`);
    this.name = "[InvalidDate]";
    this.code = code;
  }
}
