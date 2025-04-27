/*
Problem Submission Link: https://leetcode.com/problems/climbing-stairs/submissions/1610957098

Explain your approach in 3-5 steps:
Explanation: 
1. We check if n is 1 or 2, in which case we return n directly.
2. We initialize three variables: prev1, prev2, and curr to store the last two Fibonacci numbers and the current Fibonacci number.
3. Need to iterate from 3 to n, updating curr as the sum of prev1 and prev2.
4. Update prev2 to prev1 and prev1 to curr for the next iteration.
5. Finally, we return curr, which contains the nth Fibonacci number.

Time Complexity (in terms of N):
O(N): We are iterating through the list of intervals once, where N is the number of intervals.

Space Complexity (in terms of N):
O(1): We are using a constant amount of space for the pointers and the result list, which does not grow with the input size.
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1 || n == 2)
        return n
    let prev1 = 2;
    let prev2 = 1;
    let current = 3

    for(let i = 3; i <= n; i++)
    {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return current

    // if(n == 1 || n == 2)
    //     return n
    // return climbStairs(n-1) + climbStairs(n-2)

    // let memo = new Array(n+1);

    // let backTrack = (i) => {
    //     if(i == 1 || i == 2)
    //         return i

    //     if(memo[i])
    //         return memo[i]
        
    //     memo[i] = backTrack(i-1) + backTrack(i-2)
    //     return memo[i]
    // }
    // return backTrack(n);
};