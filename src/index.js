
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [], matrix_reverse = [];
    if (typeof matrix == "object") {
        if (matrix.length!=0) {
            for (let i=0; i<matrix.length; i++) {
              if ( i==0 || i%2==0) {
                result = result.concat(matrix[i]);
              }
              else {
                matrix_reverse = matrix[i].reverse();
                result = result.concat(matrix_reverse);
              }
            }
          }
    }
    return result;
}
