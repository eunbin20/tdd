import Dollar from "./money";

test("test multiplication", () => {
  const five = new Dollar(5);
  const product = five.times(2);
  expect(product.amount).toBe(10);
});

test("test multiplication, but value of Dollar should not be changed.", () => {
  const five = new Dollar(5);
  let product = five.times(2);
  expect(product.amount).toBe(10);
  product = five.times(3);
  expect(product.amount).toBe(15);
});

test("test equality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});
