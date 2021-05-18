var reverseList = function(head) {
  let pre = null;
  let cur = head
  while(cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next; 
  }
  return pre;
};

var reverse = function(head) {
  let pre = null;
  let cur = head;
  while(cur) {
    const next = cur.next;
    cur.next = pre;
    pre  = cur;
    cur = next;
  }
  return pre;
}