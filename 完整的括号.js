var isValid  = function(s) {
  let map = new Map();
  let stack = [];
  map.set('{','}')
  map.set('[',']')
  map.set('(',')')
  for(let i=0;i<s.length;i++) {
    if(map.has(s[i])) {
      stack.push(map.get(s[i]))
    }else if(stack.pop() !== s[i]){
      return false
    }  
  } 
  if(stack.length != 0) {
    return false;
  }
  return true

}