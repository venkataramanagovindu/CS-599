/*
Problem Submission Link: https://leetcode.com/problems/combination-sum/submissions/1573348033

Explain your approach in 3-5 steps:
Explanation: 
1. Used `result` to store valid combinations and `cand` to track the current combination being formed.  
2. The `backTrack(i, sum)` function explores combinations starting from index `i` and the current `sum`.  
3. If `sum` equals the target, the current combination (`cand`) is added to `result`.  
4. If `sum` exceeds the target or the index reaches the end of the array, the function returns without exploring further.  
5. The function includes the current candidate, recursively calls to explore further, then removes it and proceeds to the next candidate.
Time Complexity (in terms of N):
 O(2^n)
The function explores all possible combinations of the candidates, 
which can be up to 2^n combinations, where n is the number of candidates.

Space Complexity (in terms of N):
O(target / min(candidates))
The space used depends on how deep the recursion goes and how many valid combinations fit the target, 
which is at most target / min(candidates).

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
        let result = [], cand = [];
    var backTrack = (i, sum) => {
        if(sum == target)
        {
    
            result.push([...cand]);
            return
        }
        if(sum > target || i == candidates.length)
            return
        
    
        cand.push(candidates[i]);
        backTrack(i, sum + candidates[i]);
        cand.pop()
        backTrack(i + 1, sum)
    }
    backTrack(0,0);
    return result
    };
    
    