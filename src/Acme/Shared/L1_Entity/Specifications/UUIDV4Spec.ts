import { validate, version } from "uuid";

import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class UUIDV4Spec implements Specification<string> {
  isSatisfiedBy(candidate: string): boolean {
    return validate(candidate) && version(candidate) === 4;
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }

}
