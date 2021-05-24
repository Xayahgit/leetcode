var missingNumber = function (nums) {
  for ([key, val] of nums.entries()) {
      if (key !== val) return key;
  }
  return nums.length;
};
