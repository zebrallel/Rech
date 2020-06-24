var searchMatrix = function (matrix, target) {
  if (!matrix[0]) {
    return false
  }

  var x = 0;
  var y = matrix[0].length - 1;
  var result = false;

  while (matrix[x] && matrix[x][y] !== undefined) {
    var value = matrix[x][y];
    console.log(value)

    if (value === target) {
      result = true;
      break;
    } else if (target < value) {
      y--;
    } else {
      x++;
    }
  }

  return result;
};

console.log(searchMatrix([[0,0,0],[2,7,9],[7,8,11]], 7));
