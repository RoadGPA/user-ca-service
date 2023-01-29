import { DateTime } from "luxon";

import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class MaxDateLimitSpec implements Specification<string> {
  readonly #maxDateLimit: string;

  constructor(maxDateLimit: string) {
    this.#maxDateLimit = maxDateLimit;
  }
  isSatisfiedBy(candidate: string): boolean {
    return DateTime.fromISO(candidate) <= DateTime.fromISO(this.#maxDateLimit);
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }

}
