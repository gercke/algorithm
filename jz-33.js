var verifyPostorder = function (postorder) {
    let len = postorder.length;
    // 若为叶子节点，则返回 true
    if (len < 2) return true
    // 后序遍历的最后一个元素为根节点
    let root = postorder[len - 1];
    let i = 0
    // 划分左/右子树
    for (; i < len - 1; i++) {
        if (postorder[i] > root) break
    }
    // 判断右子树中的元素是否都大于 root，此处用到 every (数组 API，数组的每个元素都返回 true 则整体返回 true)
    let result = postorder.slice(i, len - 1).every(x => x > root);
    if (result) {
        // 对左右子树进行递归调用,左右子树通过 i 进行分割
        return verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, len - 1))
    } else {
        return false
    }
};

function verifyPostorder(postorder) {
    if(postorder.length<2) return true;
    if (postorder && postorder.length > 0) {
      const root = postorder[postorder.length - 1];
      for (var i = 0; i < postorder.length - 1; i++) {
        if (postorder[i] > root) {
          break;
        }
      }
      for (let j = i; j < postorder.length - 1; j++) {
        if (postorder[j] < root) {
          return false;
        }
      }
      var left = true;
      if (i > 0) {
        left = verifyPostorder(postorder.slice(0, i));
      }
      var right = true;
      if (i < postorder.length - 1) {
        right = verifyPostorder(postorder.slice(i, postorder.length - 1))
      }
      return left && right;
    }
  }