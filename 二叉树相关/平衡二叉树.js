var isBalanced = function(root) {
  let ans = true; 
  function isbalance(node) {
    if (ans === true) {
      if (node === null) return 0;
    
      let left = isbalance(node.left),
          right = isbalance(node.right);

      if (Math.abs(left - right) > 1) ans = false;

      return Math.max(left, right) + 1;
    }
  }
  
  isbalance(root);
  
  return ans;
};


var isBalanced = function(root) {
  if(!root) return true
  const depth = (root)=> {
    if(!root) return 0
    const left = depth(root.left) + 1
    const right = depth(root.right) + 1
    return Math.max(left,right)    
  }
  // const left = depth(root.left) + 1
  // const right = depth(root.right) + 1
  if(Math.abs(depth(left) - depth(right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
    return true
  }else {
    return false
  }
 

  

}
// 
// 