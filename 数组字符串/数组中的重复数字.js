var findRepeatNum = function(nums) {
  let map = new Map()
  for(let num of nums) {
    if(map.has(num)) {
      return num;
    }
    map.set(num,1)
  }
}

var findRepeatNum = function(nums) {
  let map = new Map();
  for(num of nums) {
    if(map.has(num)) {
      return num
    }
    map.set(num,1)
  }
}

var repeatNum = function(nums) {
  let map = new Map();
  for(num of nums) {
    if(map.has(num)) {
      return num
    }
    map.set(num,1)
  }
}

// js数组去重
var quchong = function(arr) {
  return Array.from(new Set(arr))
}

function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}

var unique = function(arr) {
  for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
      if(arr[i]  === arr[j]) {
        arr.splice(j,1)
        j--;
      }
    }
  }
  return arr;
}




