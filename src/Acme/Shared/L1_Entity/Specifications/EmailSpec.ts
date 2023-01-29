import { validate } from "email-validator";

import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class EmailSpec implements Specification<string> {
  isSatisfiedBy(candidate: string): boolean {
    return validate(candidate);
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }

}
