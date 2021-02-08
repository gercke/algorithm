var mergeTwoLists = function (l1, l2) {
  // head为链表，pre为指针
  const head = new ListNode(-1);
  let pre = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      pre.next = l1;
      pre = pre.next;
      l1 = l1.next;
    } else {
      pre.next = l2;
      pre = pre.next;
      l2 = l2.next;
    }
  }
  if (l1 === null) {
    pre.next = l2;
  }
  if (l2 === null) {
    pre.next = l1;
  }
  return head.next;
};