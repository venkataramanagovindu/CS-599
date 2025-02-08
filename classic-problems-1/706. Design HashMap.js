/*
Problem Submission Link: https://leetcode.com/problems/design-hashmap/submissions/1527069827 

Explain your approach in 3-5 steps:

1. As the maximum elements to be stored in the hash map is 10 ^ 6. I have choosen the bucket size as 1000 and
    each bucket can store upto 1000 elements
2. By default each bucket is not assigned with array. It will be allocated only when any key hased to that particular bucket (bucketHash)
3. Then we can use the slotHash to get the slot index in a bucket to store the key
4. The same hash methods are used to remove or to get the value of key.
5. As we are intrested in data and not only on the existance of data we use the array datatype.
Any problem you faced while coding this: YES/NO
Explanation: 

Time Complexity (in terms of N):
Example: O(1) - As we are using the hash function to get the bucket and slot index, it's a constant time operation
            worst case is O(N) - If all the elements are hashed to the same bucket (not hashed to same index in this case)

Space Complexity (in terms of N):
Example: O(N) - As we are storing the data in the array, it's a linear space complexity
*/

// Your code goes here   



var MyHashMap = function() {
    this.size = 1000;
    this.bucket = Array.from({length: this.size}, () => []);
};

MyHashMap.prototype.bucketHash = function(key) {
    return key % this.size;
};

MyHashMap.prototype.slotHash = function(key) {
    return Math.floor(key / this.size);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MyHashMap.prototype.put = function(key, value) {
    let bucketIndex = this.bucketHash(key);
    let slotIndex = this.slotHash(key);

    if (this.bucket[bucketIndex].length === 0) {
        this.bucket[bucketIndex] = Array.from({length: this.size}, () => undefined);
    }

    this.bucket[bucketIndex][slotIndex] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MyHashMap.prototype.get = function(key) {
    let bucketIndex = this.bucketHash(key);
    let slotIndex = this.slotHash(key);

    if (!this.bucket[bucketIndex] || this.bucket[bucketIndex][slotIndex] == undefined) {
        return -1;
    }
    return this.bucket[bucketIndex][slotIndex];
};

/** 
 * @param {number} key
 * @return {void}
 */
// Time Complexity: O(1)
// Space Complexity: O(1)
MyHashMap.prototype.remove = function(key) {
    let bucketIndex = this.bucketHash(key);
    let slotIndex = this.slotHash(key);

    if (this.bucket[bucketIndex]) {
        this.bucket[bucketIndex][slotIndex] = undefined;
    }
};




// var MyHashMap = function() {
//     this.size = 1000;
//     this.bucket = Array.from({length: this.size}, () => []);
// };

// MyHashMap.prototype.hash = function(key) {
//     return key % this.size
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function(key, value) {
//     let hash = this.hash(key)

//     for(let i = 0; i < this.bucket[hash].length; i++)
//     {
//         if(this.bucket[hash][i][0] == key)
//         {
//             this.bucket[hash][i][1] = value
//             return;
//         }
//     }

//     this.bucket[hash].push([key, value]);
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function(key) {
//     let hash = this.hash(key)

//     for(let i = 0; i < this.bucket[hash].length; i++)
//     {
//         const [obj_key, obj_value] = this.bucket[hash][i];
//         if(obj_key == key)
//             return obj_value
//     }
//     return -1
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function(key) {
//     let hash = this.hash(key)

//     for(let i = 0; i < this.bucket[hash].length; i++)
//     {
//         const [obj_key, value] = this.bucket[hash][i];
//         if(obj_key == key)
//         {
//             this.bucket[hash].splice(i, 1);
//             return;
//         }
//     }
// };

