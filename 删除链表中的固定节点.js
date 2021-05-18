var deleteNode = function(head,val) {
  if(!head) return head;
  if(head.val == val) {return head.next}
  let cur = head;
  while(cur.next != null) {
    if(cur.next.val == val) {
      cur.next = cur.next.next;
      return head
    }
    cur = cur.next;
  } 
  return head

}