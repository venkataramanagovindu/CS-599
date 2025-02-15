/*
Problem Submission Link: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/submissions/1535417913

Explain your approach in 3-5 steps:
Explanation: 
1. The idea is to find the prefix sum of each element and get the min value
2. By calculating the prefix sum we get the min value at each iteration (position)
3. if the min value is +ve, we need to add 1 to it to make it the sum is 1 at any position,
    if it's negative multiply (-1) and and add 1 to it

Time Complexity (in terms of N):
O(N) - As we are iterating one time over the array

Space Complexity (in terms of N):
O(1) - Need constant space for minVal and Prefixval
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let minVal = 0;
    let prefixVal = 0;

    for(let i = 0; i < nums.length; i++)
    {
        prefixVal += nums[i]
        if(prefixVal < minVal)
            minVal = prefixVal
    }

    return minVal < 0 ? (minVal * (-1) ) + 1:  (minVal) + 1;
};