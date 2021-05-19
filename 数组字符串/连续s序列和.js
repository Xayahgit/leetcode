// 滑动窗口
var findContinuousSequence = function(target) {
  let max = Math.floor(target / 2) + 1;
  let r = 1, sum = 0, ans = [], temp = [];
  while (r <= max) {
      while (sum < target) {
          sum += r;
          temp.push(r++)
      }
      while (sum >= target) {
          if (sum === target) ans.push([...temp]);
          sum -= temp.shift();
      } 
  }
  return ans;
};
var fCS = function (target) {
  let max = Math.floor(target/2) +1;
  let r =1 ,sum=0,temp=[],ans = []
  while(r<=max) {
    while(sum<target) {
      sum = sum + r 
      temp.push(r++)
    }
    while(sum>=target) {
      if(sum === target) {
        return ans.push([...temp])
      }
      sum = sum-temp.shift();
    }
  }
  return ans
}

