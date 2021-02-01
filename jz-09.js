// 栈的特性是：后入先出。根据题目提示，使用 2 个栈即可。一个栈inStack用来存储插入队列的数据，一个栈outStack用来从队列中取出数据。

// 算法分为入队和出队过程。

// 入队过程：将元素放入 inStack 中。

// 出队过程：

// outStack 不为空：弹出元素
// outStack 为空：将 inStack 元素依次弹出，放入到 outStack 中（在数据转移过程中，顺序已经从后入先出变成了先入先出）
// 时间复杂度是 O(N)，空间复杂度是 O(N)。
var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};
CQueue.prototype.appendTail = function(value){
    this.inStack.push(value);
}
CQueue.prototype.deleteHead = function() {
    const { inStack, outStack } = this;
    if (outStack.length) {
        return outStack.pop();
    } else {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
        return outStack.pop() || -1;
    }
};