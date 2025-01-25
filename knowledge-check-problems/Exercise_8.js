/* 
Problem Submission Link: https://leetcode.com/playground/FJfHhHKX

Explain your approach in 3-5 steps:
    1. Used the slow pointer and fast pointer to find the middle element of the linked list
    2. The slow pointer moves one step and the fast pointer moves two steps, 
    so when the fast pointer reaches the end of the linked list, the slow pointer will be at the middle element


Any problem you faced while coding this:
    No

Time Complexity (in terms of N):
    Time complexity is O(N) -> (N/2) as we are iterating through the linked list to find the middle element

Space Complexity (in terms of N):
    The space complexity is O(1) as we are not using any extra space to store the elements
 */

class LinkedList {
    constructor() {
        this.head = null; // head of linked list
    }

    /* Linked list node */
    static Node = class {
       constructor(d) {
       //Constructor here
       this.data = d;
       this.next = null;
       }
    }

    /* Function to print middle of linked list */
    //Complete this function
    // time complexity: O(N)
    // space complexity: O(1)
     printMiddle() {
        //Write your code here
       	//Implement using Fast and slow pointers
        let slowPointer = this.head;
        let fastPointer = this.head;
        if(this.head != null)
        {
            while(fastPointer != null && fastPointer.next != null)
            {
                fastPointer = fastPointer.next.next;
                slowPointer = slowPointer.next;
            }
            console.log("The middle element is [" + slowPointer.data + "] \n");
        }
    }

     push(new_data) {
        let new_node = new LinkedList.Node(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }

     printList() {
        let tnode = this.head;
        while (tnode != null) {
            console.log(tnode.data + "->");
            tnode = tnode.next;
        }
        console.log("NULL");
    }
}

let llist = new LinkedList();
for (let i = 15; i > 0; --i) {
    llist.push(i);
    llist.printList();
    llist.printMiddle();
}
