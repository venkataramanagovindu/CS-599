/* 
Problem Submission Link: https://leetcode.com/playground/nDrsJ8rX

Explain your approach in 3-5 steps:
    1. The sort function is a recursive function that takes the array, left and right index as input and devides the array into two halves

    2.  Merge function is used to merge the two halves of the array, it takes the array, left, mid and right index as input and merges the two halves 
        by comparing the elements of the two halves and adding the smaller element to the array



Any problem you faced while coding this:
    Example: Initially I was not creating the copy of the left and right array, then after creating most the issues were resolved

Time Complexity (in terms of N):
    The time complexity for the merge and sort operations is O(NlogN) as we are dividing the array into two halves and merging them

Space Complexity (in terms of N):
    The space complexity is O(N) as we are using the array to store the elements and the left and right arrays to store the two halves of the array

 */

class MergeSort {
     // Merges two subarrays of arr[].
     // First subarray is arr[l..m]
     // Second subarray is arr[m+1..r]
     // time complexity: O(N)
        // space complexity: O(N)
     merge(arr, l, m, r) {
        //Your code here
        let leftLength = m - l + 1;
        let rightLength = r - m;
        let Left = new Array(leftLength);
        let Right = new Array(rightLength);
        for (let i = 0; i < leftLength; i++)
            Left[i] = arr[l + i];
        for (let j = 0; j < rightLength; j++)
            Right[j] = arr[m + 1 + j];
        let i = 0;
        let j = 0;
        let k = l;
        while (i < leftLength && j < rightLength) {
            if (Left[i] <= Right[j]) {
                arr[k] = Left[i];
                i++;
            }
            else {
                arr[k] = Right[j];
                j++;
            }
            k++;
        }
        while (i < leftLength) {
            arr[k] = Left[i];
            i++;
            k++;
        }
        while (j < rightLength) {
            arr[k] = Right[j];
            j++;
            k++;
        }
    }

    // Main function that sorts arr[l..r] using
    // merge()
    // time complexity: O(NlogN)
    // space complexity: O(N)
     sort(arr, l, r) {
        //Write your code here
        //Call mergeSort from here
        if(l < r)
        {
            let mid = Math.floor((l + r) / 2); 
            this.sort(arr, l, mid);
            this.sort(arr, mid + 1, r);
            this.merge(arr, l, mid, r);
        }
    }

     /* A utility function to print array of size n */
     // time complexity: O(N)
        // space complexity: O(1)
      printArray(arr) {
        let n = arr.length;
        for (let i = 0; i < n; ++i)
            console.log(arr[i] + " ");
        console.log();
    }
}
    // Driver method
     let arr = [12, 11, 13, 5, 6, 7];
     console.log("Given Array");
     let ob = new MergeSort();
     ob.printArray(arr);
     ob.sort(arr, 0, arr.length - 1);
     console.log("\nSorted array");
     ob.printArray(arr);

