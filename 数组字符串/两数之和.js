var twoSum = function(nums,target) {
  for(let i=0;i<nums.length;i++) {
    for(let j=i+1;j<nums.length;j++) {
      if(nums[i] + nums[j] == target) {
        return [i,j]
      }
    }
  }
}

var twoSum = function(nums,t) {
  let s = new Set();
  for(item of nums) {
    if(!s.has(t-item)) {
      s.add(item)
    }else {
      return [item,t-item]
    }
  }
  return []
}

var twoSum  = function(nums,t) {
  let s = new Set();
  for (item of nums ) {
    if(!s.has(t-item)) {
      s.add(item)
    }else {
      return [item,t-item]
    }
  }
  return []
}