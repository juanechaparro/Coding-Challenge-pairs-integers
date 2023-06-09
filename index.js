const findPairs = (numbers, targetSum) => {
  const numMap = {};
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const diff = targetSum - num;

    if (diff in numMap) {
      const pair = [num, diff];
      pairs.push(pair);
    }

    numMap[num] = i;
  }

  if (pairs.length === 0) {
    console.log("No pairs found.");
  }

  return pairs;
};

const numbers = [1, 9, 5, 0, 20, -4, 12, 16, 7];
const targetSum = 12;
const pairs = findPairs(numbers, targetSum);

if (pairs.length > 0) {
  pairs.forEach((pair) => {
    console.log(`+ ${pair[0]},${pair[1]}`);
  });
}

module.exports = findPairs;
