/*
Problem Submission Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/1582802272

Explain your approach in 3-5 steps:
Explanation: 
1. Used recursion to explore all possible letter combinations based on the given digits.
2. Maintain an index to track the current digit and a subset string to build combinations.
3. When the subset reaches the length of digits, added it to the result list.
4. For each digit, iterated over its corresponding letters and recursively build combinations.
5. Backtrack by removing the last added character and continuing with the next option.

Time Complexity (in terms of N):
O(4ⁿ) - each digit can have up to 4 letters, leading to exponential growth.

Space Complexity (in terms of N):
O(4ⁿ) - storing all possible combinations and recursion stack depth.

*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (!digits.length) return [];

    const numberKey = {
        2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno',
        7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    };
    
    let results = [];

    const backTrack = (index, subset) => {
        if (index === digits.length) {
            results.push(subset);
            return;
        }

        let chars = numberKey[digits[index]];
        for (let char of chars) {
            backTrack(index + 1, subset + char);
        }
    };

    backTrack(0, '');
    return results;
};