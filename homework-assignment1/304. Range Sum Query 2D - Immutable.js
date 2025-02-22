/*
Problem Submission Link: https://leetcode.com/problems/range-sum-query-2d-immutable/submissions/1544657951

Explain your approach in 3-5 steps:
Explanation: 
1. Using the prefix sum technique, we will calculate the sum of the submatrix.
2. For each cell (i, j), compute the sum of all elements from (0,0) to (i,j).
3. While calculating prefix sum, i'm subtract overlapping regions to avoid double counting.
4. To find the sum of any submatrix, used the precomputed prefix sum in constant time.

Time Complexity (in terms of N):
The time complexity is O(N*M) where N is the number of rows and M is the number of columns.

Space Complexity (in terms of N):
O(1) we are not using any extra space.

*/

/**
 * @param {number[][]} matrix
 */
// Time Complexity: O(N*M)
// Space Complexity: O(1)
var NumMatrix = function(matrix) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.matrix = matrix;
    for(let i = 0; i < this.rows; i++)
    {
        for(let j = 0; j < this.cols; j++)
        {
            let top = i > 0 ? this.matrix[i - 1][j] : 0;
            let left = j > 0 ? this.matrix[i][j - 1] : 0;
            let topLeft = (i > 0 && j > 0) ? this.matrix[i - 1][j - 1] : 0;

            this.matrix[i][j] = matrix[i][j] + top + left - topLeft;
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let bottomRight = this.matrix[row2][col2];
    let top = row1 > 0 ? this.matrix[row1 - 1][col2] : 0;
    let left = col1 > 0 ? this.matrix[row2][col1 - 1] : 0;
    let topLeft = (row1 > 0 && col1 > 0) ? this.matrix[row1 - 1][col1 - 1] : 0;

    return bottomRight - top - left + topLeft;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */


