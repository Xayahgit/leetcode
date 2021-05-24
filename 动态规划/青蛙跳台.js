var climbStairs = function(n) {
  // memo[i-2] 3
  // memo[i-1] 5   memo[i] = memo[i-2] + memo[i-1]
  const memo = []
  memo[1] = 1;
  memo[2] = 2;

  // 1,2 
  // 1,1,1
  // 2,1
  for(let i=3 ;i<=n;i++) {
    memo[i] = memo[i-2] + memo[i-1]
  }
  return memo[n]
}