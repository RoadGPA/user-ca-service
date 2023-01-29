export class InvalidEmail extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`Invalid email`);
    this.name = "[InvalidEmail]";
    this.code = code;
  }
}
