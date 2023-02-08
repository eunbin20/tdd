/**
 * Todo List
 * - [] $5 + 10CHF = $10(환율이 2:1일 경우)
 * - [x] $5 * 2 = $10
 * - [] amount를 private으로 만들기
 * - [x] Dollar 부작용?
 * - [] Money 반올림?
 * - [x] equals()
 * - [] hashCode()
 * - [] Equal null
 * - [] Equal object
 */

export default class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object) {
    return this.amount === object.amount;
  }
}
