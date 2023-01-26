import {Specification} from "./Specification";

export class StringMaxLengthSpec implements Specification<string> {
  readonly #maxLength: number;
  constructor(maxLength: number) {
    this.#maxLength = maxLength;
  }
  isSatisfiedBy(candidate: string): boolean {
    return typeof candidate === "string" && candidate.length <= this.#maxLength;
  }

}
