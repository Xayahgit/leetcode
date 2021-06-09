var sumNum = function(n) {
  return n && sumNum(n-1) + n
}