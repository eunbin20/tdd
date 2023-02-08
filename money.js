/**
 * Todo List
 * -[] $5 + 10CHF = $10(환율이 2:1일 경우)
 * -[x] $5 * 2 = $10
 * -[] amount를 private으로 만들기
 * -[] Dollar 부작용?
 * -[] Money 반올림?
 */

export default class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount *= multiplier;
  }
}
