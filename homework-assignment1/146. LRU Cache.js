/*
Problem Submission Link: https://leetcode.com/problems/lru-cache/submissions/1544682430

Explain your approach in 3-5 steps:
Explanation: 
1. I'm using doubly linked list to store the key and value and track the order of the access (used)
2. HashMap to store the key and node of the doubly linked list.
3. Get operation will remove the node from the list and insert it at the head.
4. Put operation will insert the node at the head and remove the last node if the capacity is full.

Time Complexity (in terms of N):
O(1) for both get and put operations.

Space Complexity (in terms of N):
O(N) we are using a hashmap and doubly linked list withe the size of capacity.
*/



class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Time Complexity: O(1)
// Space Complexity: O(N)
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.map = new Map();
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};



/** 
 * @param {number} key
 * @return {number}
 */
// Time Complexity: O(1)
// Space Complexity: O(1
LRUCache.prototype.get = function(key) {
    if(this.map.get(key) == undefined)
        return -1
    const node = this.map.get(key)
    this.removeNode(node);
    this.insertAtHead(node)
    return node.value
};

// Time Complexity: O(1)
// Space Complexity: O(1)
LRUCache.prototype.removeNode = function(node)
{
    node.prev.next = node.next;
    node.next.prev = node.prev
}

// Time Complexity: O(1)
// Space Complexity: O(1)
LRUCache.prototype.insertAtHead = function(node)
{
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key))
        this.removeNode(this.map.get(key));
    const newNode = new ListNode(key, value);
    this.insertAtHead(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
        const lru = this.tail.prev;
        his.removeNode(lru);
        this.map.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */