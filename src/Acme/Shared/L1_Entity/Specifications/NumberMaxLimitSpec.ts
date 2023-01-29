import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class NumberMaxLimitSpec implements Specification<number> {
  readonly #maxLimit: number;

  constructor(maxLimit: number) {
    this.#maxLimit = maxLimit;
  }

  isSatisfiedBy(candidate: number): boolean {
    return candidate <= this.#maxLimit;
  }

  and(spec: Specification<number>): Specification<number> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<number>): Specification<number> {
    return new OrSpecification(this, spec);
  }

}
