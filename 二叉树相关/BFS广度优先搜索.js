var levelOrder = function(root) {
  var ans = [] //定义一个数组
  const res = (root, k) => {
    if (!root) return //如果root为空节点，返回
    if (k === ans.length) { //k=0时，增加一个数组到ans中，此时ans变成二维数组
        ans.push([])
    }
    ans[k].push(root.val)//将值push到子数组元素中
    res(root.left, k + 1) 
    //递归root的左右孩子节点，
    //如果左右孩子节点有值，将值存到ans的数组元素下标为k+1的数组中
    res(root.right, k + 1)
    }
    res(root, 0) //执行代码
    return ans
};
