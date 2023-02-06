import addNumber from "./addNumber";

test("addition of 1 and 2 to equal 3", () => {
  expect(addNumber(1, 2)).toBe(3);
});

test("addition of 100, 50, 20, 45 and 30 to equal 245", () => {
  expect(addNumber(100, 50, 20, 45, 30)).toBe(245);
});

test("addition of 7 to equal 7", () => {
  expect(addNumber(7)).toBe(7);
});

test("addition of no argument provided to equal 0", () => {
  expect(addNumber()).toBe(0);
});
