/**
 * 길이가 같은 두 개의 행렬을 더한다.
 * @author seokmin Baek
 * @param {number[][]} matrix1 
 * @param {number[][]} matrix2 
 * @returns {number[][]}
 */

const matrixAdder = (matrix1, matrix2) => {
  return matrix1.map((row, i) => {
    return row.map((value, j) => value + matrix2[i][j]);
  });
}