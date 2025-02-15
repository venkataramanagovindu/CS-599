/*
Problem Submission Link: https://leetcode.com/problems/linked-list-cycle-ii/submissions/1535439247

Explain your approach in 3-5 steps:
Explanation: 
1. Cycles in linked list can be found using the slow and fast pointers. Slow moves one step while fast 2 steps.
2. If there is a cycle, both meet at some node at any point in the fast iteration. 
3. The distance covered by the starting point to the cycle starting point is same.
4. We can use this idea to move one pointer to the start of the linked list and move both pointers one step at a time
5. the point where both pointers meet is the cycle start point


Time Complexity (in terms of N):
O(N) - In worst case both slow and fast moves n iterations

Space Complexity (in terms of N):
O(N) -  No extra space used
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }
    let slow = head, fast = head;
    while(fast.next && fast.next.next)
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)
        {
            fast = head;
            while(slow != fast)
            {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null
};
