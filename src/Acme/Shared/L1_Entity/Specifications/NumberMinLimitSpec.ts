import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class NumberMinLimitSpec implements Specification<number> {
  readonly #minLimit: number;

  constructor(minLimit: number) {
    this.#minLimit = minLimit;
  }

  isSatisfiedBy(candidate: number): boolean {
    return candidate >= this.#minLimit;
  }

  and(spec: Specification<number>): Specification<number> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<number>): Specification<number> {
    return new OrSpecification(this, spec);
  }

}
