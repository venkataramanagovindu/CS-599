/*
Problem Submission Link: https://leetcode.com/problems/merge-intervals/submissions/1551292893

Explain your approach in 3-5 steps:
Explanation: 
1. Sort the intervals based on the start time.
2. for each interval, check if the start time is less than or equal to the end time of the previous interval.
3. If yes, then update the end time of the previous interval to the maximum of the current end time and previous end time.
4. If no, then add the current interval to the result.

Time Complexity (in terms of N):
O(NlogN) where N is the number of intervals.

Space Complexity (in terms of N):
O(N) we are using extra space to store the result.

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sample = intervals.sort((a , b) => a[0] - b[0])
    let result = [intervals[0]]

    for(let i = 1; i < intervals.length; i++)
    {
        let current  = intervals[i];
        let prev = result[result.length - 1]
            if(current[0] <= prev[1])
            {
                prev[1] = Math.max(current[1], prev[1])
            }
        else
            result.push(intervals[i])
    }
    return result
};