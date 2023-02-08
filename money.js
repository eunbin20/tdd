/**
 * Todo List
 * - [] $5 + 10CHF = $10(환율이 2:1일 경우)
 * - [x] $5 * 2 = $10
 * - [x] amount를 private으로 만들기
 * - [x] Dollar 부작용?
 * - [] Money 반올림?
 * - [x] equals()
 * - [] hashCode()
 * - [] Equal null
 * - [] Equal object
 */

export default class Dollar {
  constructor(amount) {
    this._amount = amount;
  }

  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }

  equals(object) {
    return this._amount === object._amount;
  }
}
