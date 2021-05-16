var reverseWords = function(s) {
  s = s.replace(/\s+/g, ' ') 
  return s.split(' ').reverse().join(' ').trim()
}

var reverseStr = function(s) {
  return s.split("").reverse().join(' ').trim()
}