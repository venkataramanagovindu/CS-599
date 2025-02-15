/*
Problem Submission Link: https://leetcode.com/problems/merge-sorted-array/submissions/1535435182

Explain your approach in 3-5 steps:
Explanation: 
1. The task is to merge two sorted arrays inplace, to make it more efficient we need to traverse it from both ends.
2. Compare the last elemens of both arrays and place the largest element at the end of the result array (first array)
3. decrement the copied array index by one and do the same process for the remaining elements.
4. if theere are any remaining elements in the secord array copy then to first array in the same order

Time Complexity (in terms of N):
O(M + N) - As we are iterating m+n time to copy all the elements from one to another

Space Complexity (in terms of N):
O(1) - We are updating inplace
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = m - 1, r = n - 1, dest = m + n - 1;
    while(l >= 0 && r >= 0)
    {
        if(nums1[l] > nums2[r])
        {
            nums1[dest] = nums1[l]
            l--;
            dest--;
        }
        else
        {
            nums1[dest] = nums2[r]
            r--;
            dest--;
        }
    }
    while(r >= 0)
    {
        nums1[dest] = nums2[r]
        r--;
        dest--;
    }

};