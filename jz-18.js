var deleteNode = function(head,val){
    if(head.val == val){
        return head.next;
    }
    head.next = deleteNode(head.next,val);
    return head;
}

/* @param {ListNode} head*/
var deleteNode = function(head, val) {
    let pre = new ListNode(-1); // 哨兵节点
    pre.next = head;

    let node = pre;
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    return pre.next;
};
