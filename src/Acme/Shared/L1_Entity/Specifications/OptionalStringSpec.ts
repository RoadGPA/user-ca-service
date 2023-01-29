import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class OptionalStringSpec implements Specification<string | null | undefined> {
  isSatisfiedBy(candidate: string | null | undefined): boolean {
    return (
      typeof candidate === "string" ||
      typeof candidate === "undefined" ||
      candidate === null
    );
  }

  and(spec: Specification<string | null | undefined>): Specification<string | null | undefined> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string | null | undefined>): Specification<string | null | undefined> {
    return new OrSpecification(this, spec);
  }

}
