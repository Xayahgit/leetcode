var findRepeatNum = function(nums) {
  let map = new Map()
  for(let num of nums) {
    if(map.has(num)) {
      return num;
    }
    map.set(num,1)
  }
}