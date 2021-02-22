var maxDepth = function(root) {
  // 1. 如果没下一层了，返回 0
  if (!root) {
    return 0;
  }
  // 2. 返回左右子树中最深的那一层
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};