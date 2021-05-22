var yq = function(n,m) {
  // 因为yq(1,m) = 0   ====yq(n,m) = (m+yq(n-1,m)) % n
  let res = 0;
  for(let i=2;i<=n;i++) {
    res = (m+res) % i 
  }
  return res
}

var yq = function(n,m) {
  let res = 0
  for(let i=2;i<n;i++) {
    res = (m+res) % i
  }
  return res
}


var cirCle = function(n,m) {
  let res = 0;
  for(let i=2 ;i<n;i++) {
    res = (res + n) %i;
  }
  return res
}