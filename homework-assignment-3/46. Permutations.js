/*
Problem Submission Link: https://leetcode.com/problems/permutations/submissions/1582797556

Explain your approach in 3-5 steps:
Explanation: 
1. Used recursion to generate all possible permutations of the given array.
2. Keep track of the current permutation and marked used elements to avoid duplicates.
3. When the current permutation reaches the required length, add it to the result.
4. Backtrack by removing the last element and unmarking it to explore other possibilities.
5. Continue until all possible permutations are generated.

Time Complexity (in terms of N):
O(N!) since there are N! permutations to generate.

Space Complexity (in terms of N):
 O(N!) storing all permutations plus recursion stack depth of O(N)

*/

var permute = function(nums) {
    let result = [];
    
    const backtrack = (curr, used) => {
        if (curr.length === nums.length) {
            result.push([...curr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; 

            curr.push(nums[i]); 
            used[i] = true;
            
            backtrack(curr, used);
            
            curr.pop();
            used[i] = false;
        }
    };

    backtrack([], new Array(nums.length).fill(false));
    return result;
};
