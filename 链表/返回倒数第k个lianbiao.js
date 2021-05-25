var returnk = function(head,k) {
  let head1 = head;
  let head2 = head;
  for(let i=0;i<k;i++) {
    head2 = head2.next;
  }
  while(head2!== null) {
    head1 = head1.next;
    head2 = head2.next;
  }
  return head1
}