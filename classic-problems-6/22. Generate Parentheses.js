/*
Problem Submission Link: https://leetcode.com/problems/generate-parentheses/submissions/1574086963

Explain your approach in 3-5 steps:
Explanation: 
1. The function recursively generates valid parentheses combinations.  
2.  tracks the number of open and closed parentheses.  
3. When both counts reach `n`, a valid combination is added to the result.  
4. An open parenthesis is added if there are fewer than `n` open parentheses.  
5. A closed parenthesis is added if there are fewer closed than open parentheses.

Time Complexity (in terms of N):
O(4^n / sqrt(n))
The time complexity is O(4^n / sqrt(n)) because the number of valid combinations of parentheses grows exponentially with `n`, and the division by sqrt(n) accounts for the fact that we are generating valid combinations.

Space Complexity (in terms of N):
O(n) 
The space complexity is O(n) due to the recursion stack and the storage of valid combinations in the result array.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    let stack = []

    var genPar = (open, closed) => {
        if(open == n && closed == n)
        {
            result.push(stack.join(''));
            return;
        }
        if(open < n)
        {
            stack.push('(');
            genPar(open + 1, closed);
            stack.pop();
        }
        if(closed < open)
        {
           stack.push(')');
            genPar(open, closed + 1);
            stack.pop();
        }
    }
    genPar(0, 0);
    return result;
};