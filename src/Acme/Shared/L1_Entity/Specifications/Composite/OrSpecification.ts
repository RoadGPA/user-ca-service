import {Specification} from "../Specification";
import {AndSpecification} from "./AndSpecification";

export class OrSpecification<T> implements Specification<T> {
  readonly #spec1: Specification<T>
  readonly #spec2: Specification<T>

  constructor(spec1: Specification<T>, spec2: Specification<T>) {
    this.#spec1 = spec1;
    this.#spec2 = spec2;
  }

  isSatisfiedBy(candidate: T): boolean {
    return this.#spec1.isSatisfiedBy(candidate) || this.#spec2.isSatisfiedBy(candidate);
  }

  and(spec: Specification<T>): Specification<T> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<T>): Specification<T> {
    return new OrSpecification(this, spec);
  }
}
