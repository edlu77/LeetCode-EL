// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let result = [];
  let row = 0;
  let column = 0;
  let direction = "up";
  let flag = true;
  while (flag) {
    result.push(matrix[row][column])
    if (row === m-1 && column === n-1) {
      flag = false;
    } else {
      if (direction === "up") {
        if (row === 0) {
          direction = "down";
          if (column === n-1) {
            row += 1;
          } else {
            column += 1;
          }
        } else if (column === n-1) {
          direction = "down";
          row += 1;
        } else {
          row -= 1;
          column += 1;
        }
      } else {
        if (column === 0) {
          direction = "up";
          if (row === m-1) {
            column += 1;
          } else {
            row += 1;
          }
        } else if (row === m-1) {
          direction = "up";
          column += 1;
        } else {
          row += 1;
          column -= 1;
        }
      }
    }
  }
return result;
};
