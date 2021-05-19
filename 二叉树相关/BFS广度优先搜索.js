var levelOrder = function(root) {
  if(root==null)return [];
  //bfs遍历即可
  let res=[];
  let qu=[root];
  while(qu.length>0){
      let p=qu.shift();
      res.push(p.val);
      if(p.left!==null)qu.push(p.left);
      if(p.right!==null)qu.push(p.right);
  }
  return res;
};
