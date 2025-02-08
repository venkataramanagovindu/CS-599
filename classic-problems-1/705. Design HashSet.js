/*
Problem Submission Link: https://leetcode.com/problems/design-hashset/submissions/1527047451

Explain your approach in 3-5 steps:

1. As the maximum elements to be stored in the hash set is 10 ^ 6. I have choosen the bucket size as 1000 and
    each bucket can store upto 1000 elements 
2. By default each bucket is not assigned with array. It will be allocated only when any key hased to that particular bucket (getBucketNum)
3. Then we can use the getSlotNum to get the slot index in a bucket to store the key
4. The same hash methods are used to remove or to know the existance of key.
5. As we are not intrested in data and only on the existance of data we use the bool datatype.
Any problem you faced while coding this: NO
Explanation: 

Time Complexity (in terms of N):
Example: O(1) - As we are using the hash function to get the bucket and slot index, it's a constant time operation

Space Complexity (in terms of N):
Example: O(N) - As we are storing the data in the array, it's a linear space complexity
*/

// Your code goes here   

var MyHashSet = function() {
    this.bucketSize = 1000;
    this.buckets = Array.from({length: this.bucketSize}, () => [])
    this.getBucketNum = (key) => {
        return key % this.bucketSize
    }
    this.getSlotNum = (key) => {
        return Math.floor(key / this.bucketSize)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MyHashSet.prototype.add = function(key) {
    let bucketIndex = this.getBucketNum(key)
    // Here it is to ensure the buckt has some slots before even inserting into the array
    // I have commented this out as it's taking more memory compared to normal approach
    // The reason it works best is, as the JS in scripting language it's best to add new element than creating an entire array
    // if(this.buckets[bucketIndex].length == 0)
    //     if(bucketIndex == 0)
    //         this.buckets[bucketIndex] = Array.from({length: this.bucketSize + 1})
    //     else
    //         this.buckets[bucketIndex] = Array.from({length: this.bucketSize})
    let slotIndex = this.getSlotNum(key)
    this.buckets[bucketIndex][slotIndex] = true

};

/** 
 * @param {number} key
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MyHashSet.prototype.remove = function(key) {
    let bucketIndex = this.getBucketNum(key)
    let slotIndex = this.getSlotNum(key)
    if(this.buckets[bucketIndex][slotIndex])
    {
    this.buckets[bucketIndex][slotIndex] = false
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MyHashSet.prototype.contains = function(key) {
    // return this.set[this.hashFunction(key)] != undefined
            let bucketIndex = this.getBucketNum(key)
    let slotIndex = this.getSlotNum(key)
    return !!this.buckets[bucketIndex][slotIndex] 
    // != undefined && this.buckets[bucketIndex][slotIndex] != false
};