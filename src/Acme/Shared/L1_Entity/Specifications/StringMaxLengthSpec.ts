import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class StringMaxLengthSpec implements Specification<string> {
  readonly #maxLength: number;
  constructor(maxLength: number) {
    this.#maxLength = maxLength;
  }
  isSatisfiedBy(candidate: string): boolean {
    return typeof candidate === "string" && candidate.length <= this.#maxLength;
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }
}
