/*
Problem Submission Link: https://leetcode.com/problems/max-consecutive-ones-iii/submissions/1559859535

Explain your approach in 3-5 steps:
Explanation: 
1. it's a sliding window problem. in each windows we should not have more than k zeros.
2. use two pointers l and r to iterate the array.
3. if we find a zero, we will increase the zeroCount.
4. if the zeroCount is greater than k, we will shrink the window from the left side.
5. we will keep track of the max length of the window.

Time Complexity (in terms of N):
O(N) we are iterating the array only once.

Space Complexity (in terms of N):
O(1) we are not using any extra space.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0, r = 0,zeroCount = 0, max = 0;

    while(r < nums.length)
    {
        if(nums[r] == 0)
        {
            zeroCount++;
        }
        while(zeroCount > k)
        {
            if(nums[l] == 0)
                zeroCount--
            l++
        } 
        max = Math.max(max, r - l + 1)
        r++;
    }
    return max;
};


/*

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]

[1,1,1,0,0,0,1,1,1,1,0]



*/