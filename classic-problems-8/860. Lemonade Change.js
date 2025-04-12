/*
Problem Submission Link: https://leetcode.com/problems/lemonade-change/submissions/1597015208

Explain your approach in 3-5 steps:
Explanation: 
1. Maintain counts of $5 and $10 bills to track available change.
2. For a $5 bill, no change is needed—just increment the count of $5 bills.
3. For a $10 bill, check if a $5 bill is available for change; if so, decrement $5 and increment $10.
4. For a $20 bill, prefer giving change as one $10 and one $5; if not possible, check for three $5 bills.
5. If at any point the required change can't be given, return false; otherwise, return true after processing all bills.

Time Complexity (in terms of N):
O(N): We iterate through the list of bills once, where N is the number of bills.

Space Complexity (in terms of N):
O(1): We use a constant amount of space to keep track of the counts of $5 and $10 bills, regardless of the input size.

*/
/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function(bills) {
    let change = [0,0];
    for(let i = 0; i < bills.length; i++)
    {
        if(bills[i] == 5)
        {
            change[0] += 1
        }
        if(bills[i] == 10)
        {
            if(change[0] > 0)
                {
                    change[0] -= 1;
                    change[1] += 1;
                }
                else
                    return false
        }
        if(bills[i] == 20)
        {
            if(change[0] > 0 && change[1] > 0)
            {
                change[0] -= 1;
                change[1] -= 1;
            }
            else if(change[0] > 2)
            {
                change[0] -= 3;
            }
            else
                return false
        }
    }
    return true;
};