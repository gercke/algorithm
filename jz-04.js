var findNumberIn2DArray = function(matrix, target) {
    let flag = false;
    for (let i = matrix.length; i > 0; i--) {
      if (matrix[i-1][0] <= target) {
        if (matrix[i-1].includes(target)) {
          flag = true;
          i = -1;
        }
      }
    }
    return flag;
  };