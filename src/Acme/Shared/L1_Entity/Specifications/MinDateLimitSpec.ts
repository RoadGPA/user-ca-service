import { DateTime } from "luxon";

import {Specification} from "./Specification";
import {AndSpecification} from "./Composite/AndSpecification";
import {OrSpecification} from "./Composite/OrSpecification";

export class MinDateLimitSpec implements Specification<string> {
  readonly #minDateLimit: string;

  constructor(minDateLimit: string) {
    this.#minDateLimit = minDateLimit;
  }
  isSatisfiedBy(candidate: string): boolean {
    return DateTime.fromISO(candidate) >= DateTime.fromISO(this.#minDateLimit);
  }

  and(spec: Specification<string>): Specification<string> {
    return new AndSpecification(this, spec);
  }

  or(spec: Specification<string>): Specification<string> {
    return new OrSpecification(this, spec);
  }

}
