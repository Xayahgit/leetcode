var searchK = function(root,k) {
  let arr = new Set();
  // dfs的意思是深度优先搜索
  const dfs = (root) => {
    if(root) {
      arr.add(root.val);
      dfs(root.left);
      dfs(root.right);
    }
  }
  dfs(root);
  const sortArr = Array.from(arr).sort((a,b) => b-a);
  return sortArr[k-1]
}