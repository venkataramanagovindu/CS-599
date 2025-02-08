/*
Problem Submission Link: https://leetcode.com/problems/min-stack/submissions/1527015617

Explain your approach in 3-5 steps:

1. I have used two stacks, one to store the elements and the other to store the minimum element at that point.
2. While pushing the element, I will check if the element is less than or equal to the minimum element at that point.
3. If it is, then I will push the element to the minStack as well.
4. While popping the element, I will check if the element is the minimum element at that point.
5. If it is, then I will pop the element from the minStack as well.
Any problem you faced while coding this: YES/NO
Explanation: 

Time Complexity (in terms of N):
Example: O(1) - As we are using the stack to store the elements, it's a constant time operation 

Space Complexity (in terms of N):
Example: O(N) - As we are storing the data in the array, it's a linear space complexity
*/

// Your code goes here  


// var MinStack = function() {
//     this.minStack = []
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     if(this.minStack.length)
//     {
//         const [prev_val, prev_min] = this.minStack[this.minStack.length - 1]

//         if(prev_min < val)
//         {
//             this.minStack.push([val, prev_min])
//             return;
//         }
//     }
//         this.minStack.push([val, val])
    
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     const [val, min] = this.minStack.pop()
//     return val;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     const [val, min] = this.minStack[this.minStack.length - 1]
//     return val;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     const [val, min] = this.minStack[this.minStack.length - 1]
//     return min
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(!this.minStack.length || val <= this.getMin())
    {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MinStack.prototype.pop = function() {
    let popedElem = this.stack.pop()
    if(popedElem == this.minStack[this.minStack.length - 1])
        this.minStack.pop()
};

/**
 * @return {number}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};