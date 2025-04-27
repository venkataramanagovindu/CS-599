/*
Problem Submission Link: https://leetcode.com/problems/jump-game-ii/submissions/1364437042

Explain your approach in 3-5 steps:
Explanation: 
1. We initialize three variables: jumps to count the number of jumps, l to track the left boundary of the current jump, and r to track the right boundary.
2. We loop until the right boundary (r) is less than the last index of the array.
3. Inside the loop, we find the farthest point we can reach from the current jump by iterating from l to r.
4. We update the left boundary (l) to the next position after r and set the right boundary (r) to the farthest point we can reach.
5. We increment the jump count after each iteration.
6. Finally, we return the total number of jumps needed to reach the last index.

Time Complexity (in terms of N):
O(N): We iterate through the list of intervals once, where N is the number of intervals.

Space Complexity (in terms of N):
O(1): We are using a constant amount of space for the pointers and the result list, which does not grow with the input size.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0, l = 0, r = 0;
  
    while(r < nums.length - 1)
    {
      longest = 0;
      for(let i = l; i <= r; i++)
      {
          longest = Math.max(longest, i + nums[i])
      }
      l = r + 1;
      r = longest
      jumps++
    }     
    return jumps
  };

//  
// We use a greedy approach to always jump to the farthest position we can reach within the current window.

// We maintain:

// l and r to represent the current jump range

// jumps to count the number of jumps

// For each jump, we explore the farthest point we can reach in this window, then update the window.”

// Dry Run Example: [2, 3, 1, 1, 4]


// Index	Value	Explanation
// 0	2	Jump range [0, 2] → max reachable = max(0+2, 1+3, 2+1) = 4
// → Jump 1	From index 0 to range [1, 2] — best to jump to index 1	
// 1	3	New range = [3, 4] (because 1+3 = 4)
// → Jump 2	Reach the end	
