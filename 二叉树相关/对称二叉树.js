var isS = function(root) {
  if(!root) return true;
  const check = (left, right) => {
    if (!left && !right) return true // 左右子树为空，为镜像
    if (!left || !right) return false // 左右子树一个为空，不为镜像
    if (left.val !== right.val) return false // 左右子树值不相等，不为镜像
    return check(left.left, right.right) && check(left.right, right.left)
  }
    return check(root.left, root.right)
}


var isS = function(root) {
  if(!root) return true;
  const check = (left,right) => {
    if(!left && !right) return true;
    if(!left || !right) return false;
    if(left.val !== right.val) return false
    return check(left.left,right.right)  && check(left.right,right.left)
  }
  return check(root.left,root.right)
}


var isDUI = function(root) {
  if(!root) return true;
  const check = (left,right) => {
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val !== right.val) return false
    return check(left.left,right.right) && check(left.right,right.left)

  }
  check(root.left,root.right) 
}