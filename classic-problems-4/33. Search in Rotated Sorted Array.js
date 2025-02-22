/*
Problem Submission Link: https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/1551280227

Explain your approach in 3-5 steps:
Explanation: 
1. We need to search the target in the rotated sorted array.
2. Use two pointers l and r to find the target.
3. After deviding the array by half we need to check if the left part is sorted, if yes then check if the target is in the left part.
4. If the left part is not sorted then the right part will be sorted, check if the target is in the range. for ach check shrink the array and move the pointers.
5. If the target is found return the index. if not found return -1.
Time Complexity (in terms of N):
O(log(N)) where N is the number of elements in the array.

Space Complexity (in terms of N):
O(1) we are not using any extra space.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0; r = nums.length - 1;
    while(l <= r)
    {
        let mid =  l + Math.floor((r - l) / 2);
        if(nums[mid] == target)
            return mid
        else if(nums[l] <= nums[mid]) 
        {
            if (target < nums[l] || target > nums[mid])
                l = mid + 1
            else
                r = mid - 1
        }
        else
        {
            if(target < nums[mid] || target > nums[r])
                r = mid - 1
            else
                l = mid + 1
        }
    }
    return -1
};