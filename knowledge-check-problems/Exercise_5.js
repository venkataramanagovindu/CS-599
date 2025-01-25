/* 
Problem Submission Link: https://leetcode.com/playground/Vx76Yjfx

Explain your approach in 3-5 steps:
    1. Uses the array based stack to keep track of the low and high index of the array to be sorted

    2. For each iteration:
        The low and high indices are popped from the stack.
        The array is partitioned, and the pivot's index is returned.
        If there are elements on the left side of the pivot, push the left subarray range onto the stack.
        Similarly, push the right subarray range if it exists.

    3. Swap the elements when it's not in the correct order



Any problem you faced while coding this:
     I was able to build iterative approach but it some time for me to understand the stack based approach and implement it.

Time Complexity (in terms of N):
   Best Case: O(NlogN) and Worst Case: O(N^2)

Space Complexity (in terms of N):
    Best Case: O(logN) and Worst Case: O(N)

 */

class IterativeQuickSort {

    // time complexity: O(1)
    // space complexity: O(1)
     swap(arr, i, j) {
        //Try swapping without extra variable

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

      /* This function is same in both iterative and
           recursive*/
    // time complexity: O(N)
    // space complexity: O(1)
     partition(arr, l, h) {
        let pivot = arr[h];
        let i = l - 1;
    
        for (let j = l; j < h; j++) {
            if (arr[j] <= pivot) {
                i++;
                this.swap(arr, i, j);
            }
        }
        
        this.swap(arr, i + 1, h);
        return i + 1;
        //Compare elements and swap.
    }

     // Sorts arr[l..h] using iterative QuickSort
    // time complexity: O(NlogN)
    // space complexity: O(N)
     QuickSort(arr, l, h) {
        const stack = [];

        // Push initial range [low, high] onto the stack
        stack.push(l);
        stack.push(h);
    
        while (stack.length > 0) {
            // Pop high and low from the stack
            const high = stack.pop();
            const low = stack.pop();
    
            // Partition the array and get the pivot index
            const pivotIndex = this.partition(arr, low, high);
    
            // If there are elements on the left side of the pivot, push left range
            if (pivotIndex - 1 > low) {
                stack.push(low);
                stack.push(pivotIndex - 1);
            }
    
            // If there are elements on the right side of the pivot, push right range
            if (pivotIndex + 1 < high) {
                stack.push(pivotIndex + 1);
                stack.push(high);
            }
        }

    }

     // A utility function to print contents of arr
    // time complexity: O(N)
    // space complexity: O(1)
     printArr(arr, n) {
        let i;
        for (i = 0; i < n; ++i)
            console.log(arr[i] + " ");
    }
}

  // Driver code to test above
let ob = new IterativeQuickSort();
let arr = [4, 3, 5, 2, 1, 3, 2, 3];
ob.QuickSort(arr, 0, arr.length - 1);
ob.printArr(arr, arr.length);
