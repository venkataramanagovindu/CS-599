/* 
Problem Submission Link: https://leetcode.com/playground/ZZK8ACMc

Explain your approach in 3-5 steps:
    1. As given in the starter code, I'm using the Arrya DS to implement a stack

    2. Using the array default push and pop methos to add/remove an element from the end of the array 
       (We can also use the array indicies with top element)

    3. The Top values always keeps track of the latest position in the array, and return the last element when called peak

    4. The Is empty is handled using the top variable, when it's -1 it's empty


Any problem you faced while coding this:
    Example: Initially not 

Time Complexity (in terms of N):
   The time complexity for the push and pop operations is O(1) as we are using the array push and pop methods

Space Complexity (in terms of N):
    The space complexity is O(N) as we are using the array to store the elements and the top variable to keep track of the latest element

 */

// code goes here


class Stack {
  //Please read sample.java file before starting.
  //Kindly include Time and Space complexity at top of each file

    constructor() {
        //Initialize your constructor
        this.MAX = 1000;
        this.top = -1;
        this.a = new Array(this.MAX);
    }

    // time complexity: O(1)
    // space complexity: O(1)
    isEmpty() {
        //Write your code here
        return this.a == -1;
    }

    // time complexity: O(1)
    // space complexity: O(1)
    push(x) {
        //Check for stack Overflow
        //Write your code here
        if(this.top == this.MAX - 1)
            return false
        this.a.push(x);
        this.top++;
        return true
    }

    // time complexity: O(1)
    // space complexity: O(1)
    pop() {
        //If empty return 0 and print " Stack Underflow"
        //Write your code here
        if(this.isEmpty())
            {
                console.log('Stack Underflow');
                return 0;
            }
        else
            {
                this.top--;
                return this.a.pop();
            }
    }

    // time complexity: O(1)
    // space complexity: O(1)
     peek() {
       //Write your code here
       if(this.isEmpty())
        {
            console.log('Stack is empty')
        }
        else
        {
            return this.a[this.top]
        }
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop() + " Popped from stack");
