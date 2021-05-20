var reversePrint = function(head) {
  let nums = []
  let node = head
  while(head !== null) {
    nums.unshift(node.val)
    node = node.next
  }
  return nums
 }



 var reverseList(head) {
   let arr = [];
   let node = head;
   while(head !== null) {
     arr.unshift(node.val);
     node = node.next
   }
   return arr
 }


 var congwei = function(head) {
   let node = head;
   let arr = [];
   while(head !== null) {
     arr.unshift(node.val);
     node = node.next;
   }

   return arr
 }

var congwei = function(head) {
  let node = head;
  let arr = []
  while(head !== null) {
    arr.unshift(node.val)
    node = node.next
  }
  return arr
}