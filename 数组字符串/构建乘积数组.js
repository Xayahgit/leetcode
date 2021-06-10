var constructArr = function(a) {
  if(!Array.isArray(a) || !a.length) return []
  let left = []
  let right = []
  left[0] = 1;
  right[a.length-1] = 1; 
  for(let i=1;i<a.length;i++) {
    left[i] = left[i-1] * a[i-1]
  }
  for(let i=a.length-2;i>=0;i--) {
    right[i] = right[i+1] * a[i+1]
  }
  let res =[]
  for(let i=0;i<a.length;i++) {
    res[i] = left[i] * right[i]
  }
  return res
};