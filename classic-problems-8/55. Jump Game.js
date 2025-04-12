/*
Problem Submission Link: https://leetcode.com/problems/jump-game/submissions/1597031022

Explain your approach in 3-5 steps:
Explanation: 
1. As we iterate through the array, we keep track of the farthest index we can reach.
2. If at any point the current index exceeds the farthest reachable index, we cannot reach the end.
3. If we can reach or exceed the last index, we return true.
4. The loop continues until we either reach the end or find that we cannot proceed further.

Time Complexity (in terms of N): 
O(N): We iterate through the list of jumps once, where N is the length of the input array.

Space Complexity (in terms of N):
O(1): We use a constant amount of space to keep track of the farthest reachable index, regardless of the input size.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // let currentTarget = nums.length - 1;
    // for(let i = currentTarget - 1; i >= 0; i--)
    // {
    //     if(nums[i] + i >= currentTarget)
    //     {
    //         currentTarget = i;
    //     }        
    // }
    // return currentTarget == 0
    let currentTarget = 0;

    for(let i = 0; i < nums.length - 1 && i <= currentTarget; i++)
    {
        currentTarget = Math.max(currentTarget, i + nums[i]);
    }
    return currentTarget >= (nums.length - 1);
};