str = 'aaa bbb ccc';

var replaceSpace = function(s) {
  return s.replaceAll(" ",'%20');
}

console.log(replaceSpace(str))