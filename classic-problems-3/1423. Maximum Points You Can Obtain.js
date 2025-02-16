
/*
Problem Submission Link: https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/submissions/1543561014

Explain your approach in 3-5 steps:
Explanation: 
1. If we take k cards from the start and n-k cards from the end, we can find the maximum score.
   it's line circular array
2. First we take the k cards from start and calculate the sum of the cards.
3. Then we iterate from 0 to k and calculate the current score by removing the last card from the start and adding the card from the end.
4. for each step we calculate the score and compare it with the maxScore.

Time Complexity (in terms of N):
The time complexity is O(K) where K is the number of cards we are taking from the start.
 
Space Complexity (in terms of N):
O(1) we are not using any extra space.

*/

// 1,2,3,4,5,6,1
// k = 3
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let maxScore = 0;
    let currentScore = 0;
    let len = cardPoints.length;

    if (k === len) {
        for(let i = 0; i < k; i++)
            maxScore += cardPoints[i]
        return maxScore;
    }

    for (let i = 0; i < k; i++) {
        currentScore += cardPoints[i];
    }

    maxScore = currentScore;

    for (let i = 0; i < k; i++) {
        currentScore -= cardPoints[k - 1 - i]; 
        currentScore += cardPoints[len - 1 - i]; 
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;
};
