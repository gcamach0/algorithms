// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Works creating a new array to work with
const rotate = (nums, k) => {
  const n = nums.length;
  const copyArray = new Array(n);
  for (let i = 0; i < n; i++) {
    const element = nums[i];
    if (i < n - k) {
      copyArray[i + k] = element;
    } else {
      const stepsToEnd = n - i - 1;
      const stepsFromStart = k - stepsToEnd;
      copyArray[stepsFromStart - 1] = element;
    }
  }
  return copyArray;
};

console.log(rotate([-1, -100, 3, 99], 2));
