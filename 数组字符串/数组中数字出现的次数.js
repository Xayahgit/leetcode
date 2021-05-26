
// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]

var sigleN = function(nums) {
  let res = []
  for(num of nums) {
    if(nums.indexOf(num) === nums.lastIndexOf(num)) {
      res.push(num)
    }
  }
  return res
}