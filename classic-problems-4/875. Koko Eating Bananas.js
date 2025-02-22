/*
Problem Submission Link: https://leetcode.com/problems/koko-eating-bananas/submissions/1551307158

Explain your approach in 3-5 steps:
Explanation: 
1. Initialize search range from 1 to max(piles).
2. Apply binary search, calculating mid as the eating speed.
3. Compute total hours (curr_h) needed for mid speed.
4. If curr_h ≤ h, update result and search left; else, search right.
5. Return result, the minimum speed to finish in h hours. 


Time Complexity (in terms of N):
(Time Complexity: O(n log M), where M is the maximum number of bananas in a pile.

Space Complexity (in terms of N):
O(1) we are not using any extra space.
*/



/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1; r = Math.max(...piles), result = r;
    while(l <= r)
    {
        let curr_h = 0
        let k = l + Math.floor((r - l) / 2);
        for(let i = 0; i < piles.length; i++)
        {
            curr_h += Math.ceil(piles[i] / k)
        }

        if(curr_h <= h)
        {
            result = k;
            r = k - 1
        }
        else
            l = k + 1 
    }
    return result
};