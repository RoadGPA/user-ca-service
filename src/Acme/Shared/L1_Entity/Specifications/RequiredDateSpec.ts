import { DateTime } from "luxon";

import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class RequiredDateSpec implements Specification<string> {
  isSatisfiedBy(candidate: string): boolean {
    return DateTime.fromISO(candidate).isValid;
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }

}
