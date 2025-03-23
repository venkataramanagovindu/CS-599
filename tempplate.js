/*
Problem Submission Link: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/submissions/1535417913

Explain your approach in 3-5 steps:
Explanation: 
1. First, ensure that the starting position (0, 0) and the destination are not blocked (value of 0). 
If either is blocked, return an empty list immediately.
2. Use recursive backtracking to explore all possible paths from the current position to the destination. 
Try to move in four directions: Down, Left, Right, and Up. Mark cells as visited and unvisited as we explore to ensure the rat doesn’t revisit any cell.
3. aintain a path string during the recursion. As the rat reaches the destination, append the path to the result array.
4. If a path reaches a dead-end or the destination is reached, backtrack by unmarking the current cell as visited and continue searching in other directions.
5. After all paths are found, sort the paths lexicographically to return the result in the required order.
Time Complexity (in terms of N):
O(4^(N^2)): In the worst case, there are up to four directions to move from each cell, and we may explore all N^2 cells. 

Space Complexity (in terms of N):
O(N^2): The space complexity is determined by the recursion stack and the visited matrix, which can each grow to a size of N^2 in the worst case.

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
