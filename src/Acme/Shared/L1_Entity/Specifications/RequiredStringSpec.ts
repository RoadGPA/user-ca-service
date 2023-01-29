import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";
import {IsStringSpec} from "./IsStringSpec";

export class RequiredStringSpec implements Specification<string> {
  readonly #isStringSpec: Specification<string>;

  constructor() {
    this.#isStringSpec = new IsStringSpec();
  }
  isSatisfiedBy(value: string): boolean {
    return this.#isStringSpec.isSatisfiedBy(value) && value.trim().length > 0;
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }
}
