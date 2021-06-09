var isStraight = function(nums) {
  nums.sort((a,b)=>a-b)
  const zeroCount = nums.findIndex(i=>i)
  for(let i=zeroCount;i<4;i++){
      if(nums[i]==nums[i+1]) return false
  }
  return nums[4] - nums[zeroCount] < 5
};


// var arr = [0,2,3,0,0,12,0]

// let a = arr.sort((a,b)=>a-b).findIndex(i=>i)

// console.log(a);