/* 
Problem Submission Link: https://leetcode.com/playground/SLBMvhAd

Explain your approach in 3-5 steps:
    1. As given in the starter code, I'm using the LinkedList DS to implement a stack

    2. Using the LinkedList to add/remove an element from the end of the array

    3. The head values always keeps track of the latest position in the array, and return the last element when called peak

    4. The Is empty is handled using the head variable, when it's null it's empty


Any problem you faced while coding this:
    Example: The started code does not not have the constructor for the StackAsLinkedList, I had to add it to hold the head value.

Time Complexity (in terms of N):
    The time complexity for the push and pop operations is O(1) as we are using the LinkedList to add/remove an element from the end of the array

Space Complexity (in terms of N):
    The space complexity is O(N) as we are using the LinkedList to store the elements and the head variable to keep track of the latest element

 */


class StackAsLinkedList {

    constructor() {
        this.head = null;
    }

    static stackNode = class {
        constructor(d) {
            //Constructor here
            this.data = d;
            this.next = null;
        }
    }

    // time complexity: O(1)
    // space complexity: O(1)
    isEmpty() {
        //Write your code here for the condition if stack is empty.
        this.head == null;
    }

    // time complexity: O(1)
    // space complexity: O(1)
    push(data) {
       //Write code to push data to the stack.
       const newNode = new StackAsLinkedList.stackNode(data);
        newNode.next = this.head; 
        this.head = newNode;      
    }

    // time complexity: O(1)
    // space complexity: O(1)
    pop() {
       //If Stack Empty Return 0 and print "Stack Underflow"
       //Write code to pop the topmost element of stack.
       //Also return the popped element
       if(this.isEmpty())
        {
            console.log('Stack Underflow');
            return 0;
        }
        const poppedElement = this.head.data; 
        this.head = this.head.next;          
        return poppedElement; 
    }

    // time complexity: O(1)
    // space complexity: O(1)
    peek() {
       //Write code to just return the topmost element without removing it.
       if (this.isEmpty()) {
            console.log("Stack is Empty");
            return 0;
        }
        return this.head.data; // Return the data of the head node
    }
}
//Driver code
const sll = new StackAsLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
console.log(sll.pop() + " popped from stack");
console.log("Top element is " + sll.peek());
