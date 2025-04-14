/*
Problem Submission Link: https://leetcode.com/problems/insert-interval/submissions/1604209229

Explain your approach in 3-5 steps:
Explanation: 
1. We need to add all intervals that end before the new interval starts — these don't overlap, so we keep them as they are.
2. merge all overlapping intervals by updating the start and end of the new interval using min and max.
3. We need to add the merged interval to the result list after handling all overlaps.
4. Add the remaining intervals that start after the new interval ends — they also don’t overlap.
5. Return the final list which now includes the new interval merged correctly.

Time Complexity (in terms of N):
O(N): We iterate through the list of intervals once, where N is the number of intervals.


Space Complexity (in terms of N):
O(N): We use a new list to store the merged intervals, which can grow up to N in size in the worst case.

*/
var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};