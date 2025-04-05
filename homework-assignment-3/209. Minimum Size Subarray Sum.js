/*
Problem Submission Link: https://leetcode.com/problems/minimum-size-subarray-sum/submissions/1419689056

Explain your approach in 3-5 steps:
Explanation: 
1. Usesd two pointers to maintain a dynamic window that expands and shrinks as needed.
2. Expand the window by moving the right pointer and adding elements until the sum meets or exceeds the target.
3. Once valid, shrink the window from the left while maintaining the condition to find the minimum length.
4. Continue adjusting until all possible subarrays are considered.
5. Return the smallest valid subarray length or 0 if no such subarray exists.

Time Complexity (in terms of N):
O(N) each element is processed at most twice as it expands and shrinks.

Space Complexity (in terms of N):
O(1) only a few integer variables are used (Not depending on the input), no extra space needed

*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0;
    result = Infinity;
    sum = 0;

    while(r < nums.length)
    {
        sum += nums[r]

        while(sum >= target)
        {
            result = Math.min(result, r - l + 1);
            sum -= nums[l];
            l++;
        }
        r++;
    }

    return result == Infinity ? 0 : result
};