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

const test = async (title, callback) => {
  try {
    await callback();
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
