/*
Problem Submission Link: https://leetcode.com/problems/n-queens/submissions/1581950853

Explain your approach in 3-5 steps:
Explanation: 
1. start by initializing an empty board of size n x n, where all cells are initially filled with '.'. This will be used to track the positions of the queens.
2. use a recursive backtracking function to attempt placing queens in each row. 
   For each row,  try placing a queen in each column and check if it’s a valid move (no other queen is on the same column or diagonal).
3. When a queen is placed in every row (row === n), the current board configuration is added to the result list. 
4. After attempting to place a queen in a position and recursing, backtrack by removing the queen and trying the next column in the current row.
Time Complexity (in terms of N):
With bruteforce it will be O(N ^ N) if we consider all possible placements of queens in an N x N board.
However, with backtracking, the average case is significantly reduced as many configurations are pruned early. O(N!)

Space Complexity (in terms of N):
O(N*N) As we are storing the board configuration in a 2D array and the recursion stack will also take O(N * N) space.
*/


class Solution {
    findPath(mat) {
        let n = mat.length;
        let m = mat[0].length;
        let paths = [];
        let visitedCells = Array.from({ length: n }, () => Array(m).fill(false));
        function backtrack(x, y, path) {
            if (x < 0 || y < 0 || x >= n || y >= m || mat[x][y] === 0 || visitedCells[x][y]) {
                return;
            }
            if (x === n - 1 && y === m - 1) {
                paths.push(path);
                return;
            }
            visitedCells[x][y] = true;
            backtrack(x + 1, y, path + 'D');
            backtrack(x, y - 1, path + 'L');
            backtrack(x, y + 1, path + 'R')
            backtrack(x - 1, y, path + 'U');
            visitedCells[x][y] = false;
        }
        if (mat[0][0] === 1) {
            backtrack(0, 0, "");
        }
        return paths;
    }
}
