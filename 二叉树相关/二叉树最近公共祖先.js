var lowestCommonAncestor = function(root,p,q) {
  if(root == null || root == p || root == q) return root;
  const left = lowestCommonAncestor(root.left, p ,q);
  const right = lowestCommonAncestor(root.right, p ,q);
  if(!left) return right;
  if(!right) return left;
  return root
}


var LCN = function(root,p,q) {
  if(root == null || root ==p || root==q) return root
  const left = LCN(root.left,p,q)
  const right = LCN(root.right,p,q)
  if(!right) return left;
  if(!left) return right;
  return root
}