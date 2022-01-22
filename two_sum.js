/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const solution1 = (nums, target) => {
  const neededValues = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element in neededValues) {
      return [neededValues[element], index];
    }
    neededValues[target - element] = index;
  }
  return false;
};
