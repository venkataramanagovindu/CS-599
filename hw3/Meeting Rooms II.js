/*
Problem Submission Link: 

Explain your approach in 3-5 steps:
Explanation: 
1. First, we check if the input intervals are empty or null. If so, we return 0 as no meeting rooms are needed.
2. We create two separate arrays: one for the start times and one for the end times of the intervals.
3. We sort both arrays in ascending order.
4. We initialize two pointers, s and e, to track the current start and end times, and a counter c to count the number of meeting rooms needed.
5. We iterate through the start and end times using a while loop. If the start time is less than the end time, we increment the counter c and move to the next start time. Otherwise, we decrement the counter c and move to the next end time.

Time Complexity (in terms of N):
O(N log N): The sorting of the start and end times takes O(N log N) time, where N is the number of intervals. The while loop runs in O(N) time, making the overall time complexity O(N log N).

Space Complexity (in terms of N):
O(N): We create two separate arrays for the start and end times, which takes O(N) space. The space complexity is dominated by the space used for these arrays.

*/
/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length === 0) return 0;

        const starts = intervals.map(i => i.start).sort((a, b) => a - b);
        const ends = intervals.map(i => i.end).sort((a, b) => a - b);

        let s = 0, e = 0;
        let c = 0, maxRooms = 0;

        while (s < intervals.length) {
            if (starts[s] < ends[e]) {
                c++;
                s++;
            } else {
                c--;
                e++;
            }
            maxRooms = Math.max(maxRooms, c);
        }

        return maxRooms;
    }
}




// Dry Run Example: [(0, 40), (5, 10), (15, 20)]
// Extract:

// Start = [0, 5, 15]

// End = [10, 20, 40]

// Sort both:

// Start = [0, 5, 15]

// End = [10, 20, 40]

// Pointers:

// s = 0, e = 0, count = 0, maxRooms = 0


// Time	Event	count	maxRooms
// 0	Start	1	1
// 5	Start	2	2
// 10	End	1	2
// 15	Start	2	2
// 20	End	1	2
// 40	End	0	2