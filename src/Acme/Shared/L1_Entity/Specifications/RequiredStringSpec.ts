import {Specification} from "./Specification";

export class RequiredStringSpec implements Specification<string> {
  isSatisfiedBy(value: string): boolean {
    return typeof value === "string" && value.trim().length > 0;
  }
}
