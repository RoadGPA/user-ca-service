// import {CompositeSpecification} from "./CompositeSpecification";
import {Specification} from "./Specification";

export class AndSpecification<T> implements Specification<T> {
  readonly #specs: Array<Specification<T>>

  constructor(...specs: Array<Specification<T>>) {
    this.#specs = specs;
  }
  isSatisfiedBy(candidate: T): boolean {
    return this.#specs.every(spec => spec.isSatisfiedBy(candidate));
  }
}
