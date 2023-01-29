export class InvalidUUIDV4 extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`Invalid uuid version 4`);
    this.name = "[InvalidUUIDV4]";
    this.code = code;
  }
}
