/*
Problem Submission Link: 

Explain your approach in 3-5 steps:
Explanation: 
1. We need to find the minimum number of platforms required so that no train has to wait.
2. First, we sort both arrival and departure arrays to handle the events in chronological order.
3. We use two pointers — one for arrivals and one for departures — to track the sequence of train events.
4. As we iterate, if a train arrives before the next departs, we increase the platform count; otherwise, we decrease it.
5. We maintain the maximum platform count seen during this process — that’s our final answer.

Time Complexity (in terms of N):
O(n log n) we need to` sort the arrival and departure arrays, which takes O(n log n) time.

Space Complexity (in terms of N):
O(1) as we use only variables

*/
class Solution {
    // Function to find the minimum number of platforms required at the
    // railway station such that no train waits.
    findPlatform(arr, dep) {
        
        // your code here
        arr.sort((a,b) => a - b)
        dep.sort((a,b) => a - b)
        
        let i = 0;
        let j = 0;
        
        let currentCount = 0, maxCount = 0;
        while(i < arr.length && j < arr.length)
        {
            if(arr[i] <= dep[j])
            {
               currentCount++; 
               i++;
            }
            else
            {
               currentCount--; 
               j++;
            }
            
            maxCount = Math.max(maxCount, currentCount);
        }
        
        return maxCount;
    }
}