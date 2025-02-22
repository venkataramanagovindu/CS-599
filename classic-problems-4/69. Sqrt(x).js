/*
Problem Submission Link: https://leetcode.com/problems/sqrtx/submissions/1551309446

Explain your approach in 3-5 steps:
Explanation: 
1. We need to search all integers from 0 to x to find the square root of x.
2. Use two pointers l and r to find the square root.
3. If mid is less than x/mid, then we will move the left pointer to mid + 1.
4. If mid is greater than x/mid, then we will move the right pointer to mid - 1.
5. If mid is equal to x/mid, then we will return mid.

Time Complexity (in terms of N):
O(log(x)) where x is the given number.

Space Complexity (in terms of N):
O(1) we are not using any extra space.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0)
        return 0
    let l = 0; r = x;
    while(l <= r)
    {
        let mid = l + Math.floor((r - l) / 2)
        if(mid < x / mid)
            l = mid + 1
        else if(mid > x / mid)
            r = mid - 1
        else
            return mid
    }
    return r
};