var commonNode(node,p,q) {
  if(node.val>p.val && node.val > q.val) return commonNode(node.left,p,q)
  if(node.val<p.val && node.val < q.val) return commonNode(node.right,p,q)
  return node;

}