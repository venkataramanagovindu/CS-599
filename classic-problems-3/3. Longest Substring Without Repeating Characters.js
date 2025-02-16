/*
Problem Submission Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1543583075

Explain your approach in 3-5 steps:
Explanation: 
1. This is a sliding window and a hashmap problem.
2. We will use two pointers l and r to iterate the string.
3. We will use a hashmap to store the character and its index.
4. If we find the character in the hashmap, we will update the left pointer to the next index of the character.
5. We will keep track of the maxLength of the substring.

Time Complexity (in terms of N):
O(N) we are iterating the string only once.

Space Complexity (in terms of N):
O(N) we are using a hashmap to store the character and its index.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0; r = 0, maxLength = 0, len = s.length, map = {};

    while(r < len)
    {
        if(map[s[r].charCodeAt()] == undefined)
        {
            map[s[r].charCodeAt()] = r;
        }
        else
        {
            l = Math.max(map[s[r].charCodeAt()] + 1, l);
            map[s[r].charCodeAt()] = r;
        }
        maxLength = Math.max(maxLength, r - l + 1)
        r++;
    }

    return maxLength;
}