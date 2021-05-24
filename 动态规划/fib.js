var fib = function(n) {
  if(typeof n !== 'number' || n <1) {
    return n
  }
  if(n < 2 ) {
    return 1;
  }
  return fib(n-2) + fib(n-1)
}


var fib = function(n) {
  if(typeof n !== 'number' || n < 1) {
    return n
  }
  if(n <2) {
    return 1;
  }
  return fib(n-1) + fib(n-2)
}

var fib = function(n) {
  if(n<=1) return n
  return fib(n-1) + fib(n-2)
}