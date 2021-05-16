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