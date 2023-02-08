import Dollar from "./money";

test("test multiplication", () => {
  const five = new Dollar(5);

  expect(five.times(2)).toStrictEqual(new Dollar(10));
});

test("test multiplication, but value of Dollar should not be changed.", () => {
  const five = new Dollar(5);
  expect(five.times(2)).toStrictEqual(new Dollar(10));
  expect(five.times(3)).toStrictEqual(new Dollar(15));
});

test("test equality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});
