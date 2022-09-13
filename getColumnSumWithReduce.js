let matrix = [
  [3, 4, 5],
  [3, 4, 2],
  [2, 3, 4],
  [4, 4, 4]
]

function getColumnSum(matrix, rows, cols) {
  let sum = []
  for (let col = 0; col < cols; col++) {
    sum[col] = 0;
    for (let row = 0; row < rows; row++) {
      sum[col] = sum[col] + matrix[row][col]
    }
    console.log(`Sum of ${col}th column is ${sum[col]}`)
  }
}

// Approach 2 with reduce
function getColumnSumWithReduce(matrix, rows, cols) {
 return  matrix.reduce((prevRow, currentRow) => currentRow.map((item, index) =>
    item + prevRow[index]
  ))

}


// console.log(getColumnSum(matrix, 4, 3));
console.log(getColumnSumWithReduce(matrix, 4, 3));
