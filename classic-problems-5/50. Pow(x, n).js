/*
Problem Submission Link: https://leetcode.com/problems/powx-n/submissions/1557695533

Explain your approach in 3-5 steps:
Explanation: 
1. To calculate x^n, we can use the formula x^n = x^(n/2) * x^(n/2) if n is even.
2. If n is odd, then x^n = x^(n/2) * x^(n/2) * x.
3. Using recursion, we can calculate x^(n/2) and then multiply it with itself.
4. if n is negative, we can convert it to positive and do the repetetive multiply it with 1/x.
5. and return 1 if n is 0.


Time Complexity (in terms of N):
O(logN) reduced the problem size by half in each step.

Space Complexity (in terms of N):
O(logN) recursive stack space.
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0)
    {
        n = -n
        x = 1/x 
    }
    if(n == 0)
        return 1
    if(n % 2 == 0)
    {
        let res = myPow(x, n/2);
        return res * res
    }
    else
    {
        n -= 1;
        let res = myPow(x, n/2)
        return x * res * res
    }
};
