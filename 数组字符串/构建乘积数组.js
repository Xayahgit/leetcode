var constructArr = function(a) {
  if(!Array.isArray(a) || !a.length) return []
  let res = []
  res[0] = 1;
  for(let i=1;i<a.length;i++) {
    res[i] = res[i-1] * a[i-1]
  }
  let temp = 1;
  for(let i=a.length-2;i>=0;i--) {
    temp = temp * a[i+1]
    res[i] = res[i] * temp
  }
  return res
}