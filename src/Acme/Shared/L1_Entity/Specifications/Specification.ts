export interface Specification<T> {
  isSatisfiedBy: (candidate: T) => boolean
  and(spec: Specification<T>): Specification<T>;
  or(spec: Specification<T>): Specification<T>;
}
