import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class IsStringSpec implements Specification<string> {
  isSatisfiedBy(value: string): boolean {
    return typeof value === "string";
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }
}
