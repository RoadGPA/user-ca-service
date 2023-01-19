import {CompositeSpecification} from "./CompositeSpecification";

export class RequiredStringSpec implements CompositeSpecification<string> {
  isSatisfiedBy(value: string): boolean {
    return typeof value === "string" && value.trim().length > 0;
  }

}
