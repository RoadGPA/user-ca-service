import {Specification} from "./Specification";

export abstract class CompositeSpecification<T> implements Specification<T> {
  public abstract isSatisfiedBy(candidate: T): boolean;
}
