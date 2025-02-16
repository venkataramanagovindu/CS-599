/*
Problem Submission Link: https://leetcode.com/problems/binary-subarrays-with-sum/submissions/1543550184
Explain your approach in 3-5 steps:
Explanation: 
1. We will find the number of subarrays with sum equal to goal and goal - 1.
2. We will iterate the array twice and find the number of subarrays with sum equal to goal and goal - 1.
3. if the current sum is greater than goal, we will remove the elements from the left side.
4. The count at each step will be r - l + 1.



Time Complexity (in terms of N):
We are iterating the array twice. So, the time complexity is O(2N) => O(N)

Space Complexity (in terms of N):
O(1) we are not using any extra space.

*/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return getSubArrayWithSum(nums, goal) - getSubArrayWithSum(nums, goal - 1)
};

// Time Complexity: O(N)
// Space Complexity: O(1)
function getSubArrayWithSum(nums, goal)
{
    if(goal < 0)
        return 0
    let l = 0, r = 0, len = nums.length, current_sum = 0, count = 0;
    while(r < len)
    {
        current_sum += nums[r];

        while(current_sum > goal)
        {
            current_sum -= nums[l];
            l++;
        }

        count += r - l + 1;
        r++;
    }
    return count
}