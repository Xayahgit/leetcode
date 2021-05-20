var erjinzhi = function(s) {
  s.toString(2).split("");
  let sum = 0;
  for(num in s) {
    if(num ==1) {
      sum++
    }
  }
  return sum;
}


var erjz = function(s) {
  let sum = 0;
  s = s.toString(2).split("")
  for(num of s) {
    if(num==1) {
      sum++
    }
  }
  return sum
}