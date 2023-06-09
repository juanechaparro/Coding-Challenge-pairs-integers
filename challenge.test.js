const findPairs = require("./index");
describe("findPairs", () => {
  it("should find pairs that sum to the target sum", () => {
    const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const targetSum = 12;
    const pairs = findPairs(numbers, targetSum);
    expect(pairs).toContainEqual([12, 0]);
    expect(pairs).toContainEqual([7, 5]);
    expect(pairs).toContainEqual([16, -4]);
  });

  it("should handle empty list correctly", () => {
    const numbers = [];
    const targetSum = 5;
    const pairs = findPairs(numbers, targetSum);
    expect(pairs).toEqual([]);
  });

  it("should handle no pairs found", () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 10;
    const pairs = findPairs(numbers, targetSum);
    expect(pairs).toEqual([]);
  });

  it("should find multiple pairs for a larger array", () => {
    const numbers = [10, 20, 30, 40, 50, 60];
    const targetSum = 70;
    const pairs = findPairs(numbers, targetSum);

    expect(pairs).toContainEqual([60, 10]);
    expect(pairs).toContainEqual([50, 20]);
    expect(pairs).toContainEqual([40, 30]);
  });

  it("should handle negative numbers", () => {
    const numbers = [0, -5, 10, -15, 20, -25];
    const targetSum = -5;
    const pairs = findPairs(numbers, targetSum);
    expect(pairs).toContainEqual([-15, 10]);
    expect(pairs).toContainEqual([-5, 0]);
  });
});
