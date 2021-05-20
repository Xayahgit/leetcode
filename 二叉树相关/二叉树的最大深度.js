var maxDepth = function(proot) {
  if(!proot) return 0;
  // 一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1
  return Math.max(maxDepth(proot.left),maxDepth(proot.right)) + 1
}

var maxDepth = function(proot) {
  if(!proot) return 0;
  return Math.max(maxDepth(proot.left),maxDepth(proot.right)) +1
}