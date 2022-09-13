let x = 16;
let matrix = [
  [2, 4, 5, 6],
  [7, 8, 10, 12],
  [13, 15, 16, 18],
  [20, 21, 22, 23]
]

function search(matrix, x) {
  let row = 0,
    col = matrix[0].length;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] == x) return true;

  }
  return false;
}


console.log(search(matrix, x))
