/*
Problem Submission Link: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/submissions/1535417913

Explain your approach in 3-5 steps:
Explanation: 
1. first we need to separate letter logs and digit logs. if the value at index 1 is a number then it is a digit log.
2. Next compare the logs (excluding the identifier) and sort them accordingly.
3. if then logs are equal then compate the identifiers
4. return the sorted letter logs and digit logs.

Time Complexity (in terms of N):
O(NlogN) where N is the number of logs - this time is for sorting.

Space Complexity (in terms of N):
O(N) we are using extra space to store the letter logs and digit logs.
*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letterLogs = [];
    let digitLogs = [];

    for(let i = 0; i < logs.length; i++)
    {
        if(isNaN(logs[i].split(' ')[1]))
            letterLogs.push(logs[i])
        else
            digitLogs.push(logs[i])
    }

    letterLogs.sort((a, b) => {
            let aLog = a.split(' ');
            let bLog = b.split(' ');
            let alogs = aLog.slice(1).join();
            let blogs = bLog.slice(1).join();
            let aType = aLog[0];
            let bType = bLog[0];
            let cmp = alogs.localeCompare(blogs)
            return cmp == 0 ? aType.localeCompare(bType) : cmp
        });

    return [...letterLogs, ...digitLogs]
};

/*
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

letter logs: ["let1 art can","let3 art zero","let2 own kit dig"]
digit logs: ["dig1 8 1 5 1","dig2 3 6"]



after sorting the letter logs: ["let1 art can","let3 art zero","let2 own kit dig"]
    
*/