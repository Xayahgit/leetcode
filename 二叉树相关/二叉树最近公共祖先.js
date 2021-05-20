var lowestCommonAncestor = function(root,p,q) {
  if(root == null || root == p || root == q) return root;
  const left = lowestCommonAncestor(root.left, p ,q);
  const right = lowestCommonAncestor(root.right, p ,q);
  if(!left) return right;
  if(!right) return left;
  return root
}

var lcommonNode = function(root,p,q) {
  if(root==null || root ==p|| root ==q) {
    const left = lcommonNode(root.left,p,q)
    const right = lcommonNode(root.right,q,q)
    if(!left) return right
    if(!right) return left
    return root
  }
}