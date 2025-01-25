/* 
Problem Submission Link: https://leetcode.com/playground/DykDWXWK

Explain your approach in 3-5 steps:
    1. As given in the starter code, I'm using the BinarySearch class to implement the binary search algorithm

    2. The given array is divided into two halves and the middle element is checked if it's equal to the element to be searched
    3. If the middle element is greater than the element to be searched, the left half is searched, else the right half is searched
    4. The search is continued until the element is found or the left and right indices are equal or the left index is greater than the right index

Any problem you faced while coding this:
    Initially I was not returning the element when it's found, then after adding the return statement the issue was resolved

Time Complexity (in terms of N):
    Best Case: O(logN) 

Space Complexity (in terms of N):
    The space complexity is O(1) as we are not using any extra space to store the elements

 */

class BinarySearch {
     // Returns index of x if it is present in arr[l.. r], else return -1
     // time complexity: O(logN)
        // space complexity: O(1)
    binarySearch(arr, l, r, x) {
        if(r >= l)
            {
                let mid = l + Math.floor((r - l) / 2);
                if(arr[mid] === x)
                    return mid;
                if(arr[mid] > x)
                    return this.binarySearch(arr, l, mid - 1, x);
                return this.binarySearch(arr, mid + 1, r, x);
            }
    }
}
// Driver method to test above
const ob = new BinarySearch();
const arr = [2, 3, 4, 10, 40];
const n = arr.length;
const x = 10;
const result = ob.binarySearch(arr, 0, n - 1, x);
if (result === -1)
    console.log("Element not present");
else
    console.log("Element found at index " + result);
