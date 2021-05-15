var fib = function(n) {
  if(typeof n !== 'number' || n <1) {
    return n
  }
  if(n < 2 ) {
    return 1;
  }
  return fib(n-2) + fib(n-1)
}