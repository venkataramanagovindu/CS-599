/*
Problem Submission Link: https://leetcode.com/problems/palindrome-partitioning/submissions/1573947300

Explain your approach in 3-5 steps:
Explanation: 
1. Generates all possible ways to partition a string into palindromic substrings.  
2. checks if each substring is a palindrome by comparing characters from both ends.  
3. recursively explores each partition, starting from the beginning of the string.  
4. When a valid partition is found (all substrings are palindromes), it adds that partition to the result.  
5. The function uses backtracking to explore different partitions, removing previously added palindromes and trying new ones.
Time Complexity (in terms of N):

O(2^n * n)
 where `n` is the length of the string, as it explores all possible partitions and checks for palindromes.

Space Complexity (in terms of N):
O(n)
The space complexity is O(n) due to the recursion stack and the storage of palindromic partitions in the result array.



*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    let pali = [];
    var isPalindrome = (s, i, j) => {
        while(i < j)
        {
            if(s[i] != s[j])
                return false
            i++;
            j--;
        }
        return true;
    }
    var dfs = (i) => {
        if(i == s.length)
        {
            result.push([...pali]);
            return;
        }

        for(let j = i; j < s.length; j++)
        {
            if(isPalindrome(s, i, j))
            {
                pali.push(s.substring(i, j + 1));
                dfs(j + 1);
                pali.pop();
            }

        }
    }
    dfs(0);
    return result;
};