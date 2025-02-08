/*
Problem Submission Link: https://leetcode.com/problems/implement-queue-using-stacks/submissions/1527024387

Explain your approach in 3-5 steps:

1. I have used two stacks, one to store the elements and the other to store the elements in reverse order.
2. While pushing the element, I will push the element to the stack1.
3. While popping the element, I will check if the stack2 is empty.
4. If it is, then I will pop all the elements from stack1 and push it to stack2.
5. Then I will pop the element from stack2.

Any problem you faced while coding this: YES/NO
Explanation: 

Time Complexity (in terms of N):
Example:  O(1) - As we are using the stack to store the elements, it's a constant time operation

Space Complexity (in terms of N):
Example: O(N) - As we are storing the data in the array, it's a linear space complexity
*/

// Your code goes here


// var MyQueue = function() {
//     this.stack1 = []
//     this.stack2 = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     this.stack1.push(x)
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {

//     let len1 = this.stack1.length
//     for(let i = 0; i < len1; i++)
//         this.stack2.push(this.stack1.pop())
//     let ret = this.stack2.pop()
//     let len2 = this.stack2.length

//     for(let i = 0; i < len2; i++)
//         this.stack1.push(this.stack2.pop())
//     return ret
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     let len1 = this.stack1.length
//     for(let i = 0; i < len1; i++)
//         this.stack2.push(this.stack1.pop())
//     let ret = this.stack2[this.stack2.length - 1]

//     let len2 = this.stack2.length

//     for(let i = 0; i < len2; i++)
//         this.stack1.push(this.stack2.pop())
//     return ret;

// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     return this.stack1.length == 0
// };

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
// Time Complexity: O(1)
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
// Time Complexity: amortized O(1) Worsr case O(N)
// Space Complexity: O(1)
MyQueue.prototype.pop = function() {
    if(!this.stack2.length){
        let stack1_len = this.stack1.length;
        for(let i = 0; i < stack1_len; i++)
        {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
};

/**
 * @return {number}
 */
// Time Complexity: O(N)
// Space Complexity: O(1)
MyQueue.prototype.peek = function() {
     if(!this.stack2.length){
        let stack1_len = this.stack1.length;
        for(let i = 0; i < stack1_len; i++)
        {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length - 1]
};

/**
 * @return {boolean}
 */
//  Time Complexity: O(1)
// Space Complexity: O(1)
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length
};
   