/*
Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const existingValues = new Set();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (existingValues.has(element)) {
      return true;
    }
    existingValues.add(element);
  }
  return false;
};
