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
