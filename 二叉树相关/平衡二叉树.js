var balanceTree = function(root) {
  let result = true;
  (function dfs(root){
    if(!node) return 0;
    let left = dfs(node.left) + 1;
    let right = dfs(node.right) + 1;
    if(Math.abs(left-right) > 1) {
      return false;
    }
    return Math.max(left,right);
  })(root)
  return result;
}

var isBalance = function(root) {
  let res = true;
  const dfs = function(node) {
    if(!node) return 0;
    let left = dfs(node.left) + 1;
    let right = dfs(node.right) + 1;
    if(Math.abs(left - right) > 1) return false
    return Math.max(left,right)
  }
  dfs(root)
  return result
}