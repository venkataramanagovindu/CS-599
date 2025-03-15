/*
Problem Submission Link: https://leetcode.com/problems/queue-reconstruction-by-height/submissions/1559862495

Explain your approach in 3-5 steps:
Explanation: 
1. Sort the people based on height in descending order and if the height is same then sort based on k in ascending order.
2. Now, iterate the people and insert the people at the kth index in the queue.
3. As the people are already sorted based on height, we can insert the people at the kth index.
4. as we are inserting the people of height less then the current height, the k of the current will not be affected.

Time Complexity (in terms of N):
O(N^2) where N is the number of people. while isering the people in the queue, we are shifting the elements to the right.
in worst case, we need to shift all the elements to the right.

Space Complexity (in terms of N):
O(1) we are not using the extra space. - the out put array is not considered as extra space.
if we cosider the output array then the space complexity will be O(N).
*/


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let queue = []
    people.sort((a,b) => b[0] - a[0] || a[1] - b[1])
    let n = people.length;
    for(let i = 0; i < n; i++)
    {
        queue.splice(people[i][1], 0, people[i]);
    }
    return queue;
};

/*

Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

after sorting: [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]

first iteration: [[7,0]]
second iteration: [[7,0],[7,1]]
third iteration: [[7,0],[6,1],[7,1]]
fourth iteration: [[5,0],[7,0],[6,1],[7,1]]
fifth iteration: [[5,0],[7,0],[5,2],[6,1],[7,1]]
sixth iteration: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]






*/