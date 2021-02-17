var levelOrder = function(root) {
    if (!root) {
        return [];
    }

    const data = [];
    const queue = [root];
    while (queue.length) {
        const first = queue.shift();
        data.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }

    return data;
};

var levelOrder = function(root) {
    let num = [];
    let queue = [];
    if(root==null)
        return num;
    queue.push(root);
    while(queue.length!=0){
        let temp = queue.shift();
        num.push(temp.val);
        if(temp.left!=null){
            queue.push(temp.left);
        }
        if(temp.right!=null){
            queue.push(temp.right);
        }
    }
    return num;
};
