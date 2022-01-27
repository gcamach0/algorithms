/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/

const input = [0, 1, 0, 3, 12];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const n = nums.length;
  let shiftCount = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      shiftCount++;
    } else {
      nums[i - shiftCount] = nums[i];
    }
  }
  for (let j = n - 1; j >= n - shiftCount; j--) {
    nums[j] = 0;
  }
  return nums;
};

const snowBallSolution = (nums) => {
  let zeroesCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (currentNum === 0) {
      zeroesCount++;
    } else {
      let temp = currentNum;
      nums[i] = 0;
      nums[i - zeroesCount] = temp;
    }
  }
  return nums;
};

console.log(snowBallSolution(input));
