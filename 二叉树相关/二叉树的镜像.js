var mirrorTree = function(root) {
  if(root) {
    [root.left,root.right] = [root.right,root.left];
    mirrorTree(root.left);
    mirrorTree(root.right);
  }
  return root
}