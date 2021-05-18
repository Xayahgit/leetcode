var getIntersectionNode = function(headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while(p1 !== p2){
      p1 = p1 == null ? headB : p1.next;
      p2 = p2 == null ? headA : p2.next;
  }
  return p1
};

var langmanxiangyu = function(headA,headB) {
  let node1 = headA;
  let node2 = headB;
  while(node1 !== node2) {
    p1 = p1 ==null ? headB : p1.next;
    p2 = p2 ==null ? headA : p2.next;
  }
  return p1
}