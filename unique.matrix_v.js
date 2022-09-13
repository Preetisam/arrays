var R = 4,
  C = 4;

// Function that calculate
// unique element
function unique(mat, n, m) {
  var maximum = 0,
    flag = 0;
  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) {

      // Find maximum element in a matrix
      if (maximum < mat[i][j])
        maximum = mat[i][j];
    }

  // Take 1-D array of (maximum + 1) size
  var b = Array(maximum + 1).fill(0);
  console.log(b)
  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) {
      b[mat[i][j]]++;
      console.log(mat[i][j])
      console.log(b)
    }

  // Print unique element
  for (var i = 1; i <= maximum; i++)
    if (b[i] == 1)
      console.log(i + " ");
  flag = 1;

  if (flag == 0) {
    console.log("No unique element found");
  }
}

//Input array
var mat = [
  [11, 2, 2, 20],
  [5, 16, 20, 7],
  [1, 13, 5, 16],
  [6, 7, 18, 15]
];

//execute the logic
unique(mat, R, C);
