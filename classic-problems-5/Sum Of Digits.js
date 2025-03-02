/*
Problem Submission Link: 

Explain your approach in 3-5 steps:
Explanation: 
1. If n is less than 10, return n as it is the sum of digits.
2. Otherwise, return n % 10 + sumOfDigits(n/10) which is the sum of digits of n. 
3. n mod 10 gives the last digit of n and n/10 gives the remaining digits.
4. Recursively call sumOfDigits on n/10 and add the last digit to it.

Time Complexity (in terms of N):
O(logN) as we are dividing the number by 10 in each step.

Space Complexity (in terms of N):
O(logN) recursive stack space.
*/

class Solution {

    sumOfDigits(n) {
        if(n < 10)
            return n
        return (n % 10) + this.sumOfDigits(Math.floor(n / 10))
    }
}