var strtoInt = function(str) {
  str = str.trim()
  let res = parseInt(str)
  if(isNaN(res)) return 0
  let minV = Math.pow(-2,31)
  let maxV = Math.pow(2,31) - 1
  if(res < minV) {
    return minV
  }
  if(res > maxV) {
    return maxV
  }
  return res

}