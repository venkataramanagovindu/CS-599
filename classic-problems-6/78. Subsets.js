/*
Problem Submission Link: https://leetcode.com/problems/subsets/submissions/1573237060

Explain your approach in 3-5 steps:
Explanation: 
1. The function uses DFS (Depth-First Search) to explore all possible subsets by deciding whether to include or exclude each element.  
2. When the index goes beyond the array length, I add the current subset to the `result` array.  
3. First, include the current element in `subSet` and make a recursive call to check the next element.  
4. Then, remove the element and make another recursive call to explore subsets without it.  
5. Finally, the function returns the `result` array, which contains all possible subsets of the input array.

Time Complexity (in terms of N):
O(2 ^ n)
Each element in the array has two choices: either be included in the subset or not.
For n elements, this results in 2 ^ n subsets.
Since the function recursively generates all subsets, the total number of function calls is O(2ⁿ).

Space Complexity (in terms of N):
O(n × 2ⁿ)
Recursive Stack Space: The depth of recursion is at most O(n), since at each step, the function either includes or excludes an element.
Result Storage: The function stores all 2ⁿ subsets, and each subset can be at most O(n) in size.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let subSet = []
    var  dfs = (i) =>
    {
        if(i >= nums.length){
            result.push([...subSet])
            return;
        }
        
        subSet.push(nums[i]);
        dfs(i + 1);

        subSet.pop();
        dfs(i + 1);
    }

    dfs(0)

    return result;
};


