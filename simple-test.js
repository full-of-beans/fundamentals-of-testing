const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;

const asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sum(a, b));
    }, 500);
  });
};

const asyncSubtract = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(subtract(a, b));
    }, 500);
  });
};

test("sum adds numbers", async () => {
  let result = await asyncSum(3, 7);
  let expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  result = await asyncSubtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
});
