/* 
Problem Submission Link: https://leetcode.com/playground/PDsyzfP6

Explain your approach in 3-5 steps:
    1. As given in the starter code, I'm usinf the node class to create a Singly LinkedList

    2.  TO insert data i'm checking if the head is null, if it's null I'm adding the new node as head, 
    else I'm traversing the list till the end and adding the new node at the end

    3. To print the list, I'm checking if the head is null, if it's null I'm printing the list is empty, 
    if not iterating over the list and printing it



Any problem you faced while coding this:
    Initially I was not using the head parameter from the list objcet of insert menthod, instead i was using the head from the 'this' objcet. (We can use 'this' though, but might not utilize the list param)
            Also, I did not create the copy of head in the printList method, which was causing the head to be null after the print list method was called

Time Complexity (in terms of N):
    The time complexity for the insertion is O(N) as we are iterating over the list to add the new node at the end

Space Complexity (in terms of N):
    The space complexity is O(N) as we are using the LinkedList to store the elements one object per value

 */
// JavaScript program to implement
// a Singly Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
     // Linked list Node.
     static Node = class {
        constructor(d) {
            this.data = d;
            this.next = null;
        }
    }


     // Method to insert a new node
    // time complexity: O(N)
    // space complexity: O(1)
    insert(list, data) {
        // Create a new node with given data
        const newNode = new LinkedList.Node(data);
        // If the Linked List is empty,
        // then make the new node as head
        if(list.head == null)
            {
                console.log('head is null adding new node', data);
                list.head = newNode;
            }
        // Else traverse till the last node
        // and insert the new_node there
        else{
            let lastNode = list.head;
            while(lastNode.next != null)
                lastNode = lastNode.next;
            console.log('adding new node at the end of the list', data);
            lastNode.next = newNode;
        }

        // Insert the new_node at last node
        // Return the list by head
        return this.head;
    }

     // Method to print the LinkedList.
    // time complexity: O(N)
    // space complexity: O(1)
    printList(list) {
        if(list.head == null)    {
            console.log('List is empty');
            return;
        }
        let currentNode = list.head;
        // Traverse through the LinkedList
        while(currentNode != null)
        {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        // Print the data at current node

        // Go to next node
    }
}
       // Driver code
       /* Start with the empty list. */
       let list = new LinkedList();

        // ******INSERTION******
        // Insert the values
        list.insert(list, 1);
        list.insert(list, 2);
        list.insert(list, 3);
        list.insert(list, 4);
        // Print the LinkedList
        list.printList(list);
