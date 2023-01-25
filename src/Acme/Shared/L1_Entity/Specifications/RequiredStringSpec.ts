import {Specification} from "./Specification";

export class RequiredStringSpec implements Specification<string> {
  isSatisfiedBy(candidate: string): boolean {
    return typeof candidate === "string" && candidate.trim().length > 0;
  }
}
