/*
Problem Submission Link: https://leetcode.com/problems/assign-cookies/submissions/1597006826

Explain your approach in 3-5 steps:
Explanation: 
1. As we need to maximize the number of children who can be content, we should sort both arrays: 
   the children's greed factor and the cookie sizes.
2. Initialize two pointers, one for the children (i) and one for the cookies (j).
3. Iterate through both arrays:
   - If the current cookie can satisfy the current child's greed (cookie[j] >= g[i]), 
        increment the count of satisfied children and move to the next child (i++).
   - Always move to the next cookie (j++) regardless of whether the current child was satisfied or not.
4. Continue this process until we either run out of cookies or children.


Time Complexity (in terms of N):
O(N log N) and O(M log M): Sorting the both arrays. O(N + M):  for the iteration part.
Therefore, the total time complexity is -> O(N log N + M log M)

Space Complexity (in terms of N):
O(1): We are using constant space for the count and pointers.

*/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gsorted = g.sort((a,b) => a-b);
    let ssorted = s.sort((a,b) => a-b);
    let count = 0;

    let i = 0, j = 0;
    while(i < gsorted.length && j < ssorted.length)
    {
        if(ssorted[j] >= gsorted[i])
        {
            i++;
            count++;
        }
        j++;
    }
    return count;
};
