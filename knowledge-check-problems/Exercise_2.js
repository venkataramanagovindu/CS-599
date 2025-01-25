

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

    isEmpty() {
        //Write your code here for the condition if stack is empty.
        this.head == null;
    }

    push(data) {
       //Write code to push data to the stack.
       const newNode = new StackAsLinkedList.stackNode(data);
        newNode.next = this.head; 
        this.head = newNode;      
    }

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
