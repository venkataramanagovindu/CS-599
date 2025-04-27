/*
Problem Submission Link: https://leetcode.com/problems/fibonacci-number/submissions/1610965240

Explain your approach in 3-5 steps:
Explanation: 
1. We check if n is 0 or 1, in which case we return n directly.
2. We initialize three variables: prev1, prev2, and curr to store the last two Fibonacci numbers and the current Fibonacci number.
3. Need to iterate from 2 to n, updating curr as the sum of prev1 and prev2.
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
var fib = function(n) {
    // if(n == 0 || n == 1)
    //     return n
    // return fib(n-1) + fib(n - 2)

    // let mem = new Array(n+1);

    // let backTrack = (i) => {
    //     if(i == 0 || i == 1)
    //         return i
    //     if(mem[i])
    //         return mem[i]
    //     mem[i] = backTrack(i-1) + backTrack(i - 2)
    //     return mem[i]
    // }
    // return backTrack(n);

    if(n == 0 || n == 1)
    {
        return n
    }

    let prev1 = 1
    let prev2 = 0
    let curr = 0
    
    for(let i = 2; i <= n; i++)
    {
        curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr
    }
    return curr
};