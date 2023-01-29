import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class IsNumberSpec implements Specification<number> {
  isSatisfiedBy(candidate: number): boolean {
    return typeof candidate === "number" && Number.isInteger(candidate);
  }

  and(spec: Specification<number>): Specification<number> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<number>): Specification<number> {
    return new OrSpecification(this, spec);
  }

}
