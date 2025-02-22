/*
Problem Submission Link: https://leetcode.com/problems/container-with-most-water/submissions/1544425173

Explain your approach in 3-5 steps:
Explanation: 
1. Here i used two pointers l and r to iterate the array.
2. calculate the area between the two lines.
3. move the pointer which has the smaller height.
4. keep track of the maximum area.
5. return the maximum area.

Time Complexity (in terms of N):
O(N) we are iterating the array only once.

Space Complexity (in terms of N):
O(1) we are not using any extra space.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0; r = height.length - 1,maxAmount = 0, currAmount = 0;

    while( l < r)
    {
        currAmount = Math.min(height[l], height[r]) * (r - l)
        if(currAmount > maxAmount)
                maxAmount = currAmount;
            if(height[l] < height[r])
                l++;
            else
                r--;
    }
    return maxAmount;
};
