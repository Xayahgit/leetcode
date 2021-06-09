var maxSubArray = function(nums) {
  let dp = []
  dp[0] = nums[0];
  for(let i=1;i<nums.length;i++) {
      dp[i] = Math.max(dp[i-1]+nums[i],nums[i]) 
  }
  return dp.sort((a,b) => b-a)[0]
}


var lianxu = function(nums) {
  let dp= []
  dp[0] = 0;
  for(let i=1;i<nums.length;i++) {
    dp[i] = Math.max(dp[i-1] + nums[i],nums[i])
  }
  return dp.sort((a,b) => b-a)[0]
}