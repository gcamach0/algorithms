/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
/*

/**
 * @param {number[]} nums
 * @return {number}
 */
const kadanesAlgorithm = (nums) => {
  const n = nums.length;
  let globalMax = Number.NEGATIVE_INFINITY;
  let localMax = 0;

  for (let i = 0; i < n; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
};

const kadanesAlhgorithm2 = (nums) => {
  const n = nums.length;
  let globalMax = Number.NEGATIVE_INFINITY;
  let localMax = 0;

  for (let i = 0; i < n; i++) {
    localMax = localMax + nums[i];
    if (globalMax < localMax) {
      globalMax = localMax;
    }
    if (localMax < 0) {
      localMax = 0;
    }
  }
  return globalMax;
};
