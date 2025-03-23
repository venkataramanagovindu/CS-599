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

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];

    let isCorrect = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    };

    let solve = (board, row) => {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isCorrect(board, row, col)) {
                board[row][col] = 'Q'; 
                solve(board, row + 1); 
                board[row][col] = '.'; 
            }
        }
    };

    let board = Array.from({ length: n }, () => Array(n).fill('.'));

    solve(board, 0);

    return result;
};
