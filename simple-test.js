const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;

const test = (title, callback) => {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
};

const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
};

test("sum adds numbers", () => {
  let result = sum(3, 7);
  let expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
});
