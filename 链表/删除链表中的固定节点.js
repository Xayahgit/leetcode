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

// 删除链表中的固定节点：

var deleteNode = function(head,val) {
  // 如果head为空值
  if(head == null) return head;
  // 如果head的第一个值就是需要删除的元素
  if(head.val == val) {return head.next} 
  let cur = head;
  while(cur.next!= null) {
    if(cur.next.val == val) {
      cur.next = cur.next.next;
      return head
    }
  }
}
var deleteNode = function (head,val) {
  if(!head) return head;
  if(head.val = val) {return head.next};
  let cur = head;
  while(cur.next !== null) {
    if(cur.next.val == val) {
      cur.next = cur.next.next
      return head
    }
  }
}
