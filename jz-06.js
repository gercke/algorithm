var reversePrint = function (head){
    if(head === null){
        return [];
    }
    const res = [];
    while(head){
        res.push(head.val);
        head = head.next;
    }
    return res.reverse();
}

var reversePrint = function (head) {
    if(head === null || head.next === null){
        return head;
    }
    let p = head.next;
    head.next = null;
    let tmp = null;
    while(p){
        tmp = p.next // tmp 指针前进（保存下一个指针信息）
        p.next = head // 指针反转
        head = p // head 指针前进
        p = tmp // p 指针前进
    }
}