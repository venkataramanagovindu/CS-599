/* 
Problem Submission Link: https://leetcode.com/playground/LmcJYtYT

Explain your approach in 3-5 steps:
    1. The sort function has been implemented using the quick sort algorithm, 
    The sort function takes the array, low and high index as input and recursively sorts the array
    2. The partition function is used to divide the array into two halves and return the pivot index
    by comparing the elements with the pivot element
    3. swap method is used to swap the elements in the array



Any problem you faced while coding this:
    Example: No

Time Complexity (in terms of N):
    The time complexity for the sort and partition operations is O(NlogN) as we are dividing the array into two halves and sorting them
    worst case time complexity is O(N^2)

Space Complexity (in terms of N):
    Best Case: O(logN) and Worst Case: O(N)

 */

class QuickSort {

      /* This function takes last element as pivot,
           places the pivot element at its correct
           position in sorted array, and places all
           smaller (smaller than pivot) to left of
           pivot and all greater elements to right
           of pivot */

        // time complexity: O(1)
        // space complexity: O(1)
     swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // time complexity: O(N)
    // space complexity: O(1)
     partition(arr, low, high) {
        let pivot = arr[high]; 
        let i = low - 1; 

        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                this.swap(arr, i, j);
            }
        }

        this.swap(arr, i + 1, high);
        return i + 1;
    }

     /* The main function that implements QuickSort()
          arr[] --> Array to be sorted,
          low  --> Starting index,
          high  --> Ending index */
    // time complexity: O(NlogN)
    // space complexity: O(N)
     sort(arr, low, high) {
        // Recursively sort elements before
        // partition and after partition
        if (low < high) {
            // Partition the array and get the pivot index
            let pi = this.partition(arr, low, high);

            // Recursively sort elements before and after partition
            this.sort(arr, low, pi - 1);
            this.sort(arr, pi + 1, high);
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
    // Driver program
    let arr = [10, 7, 8, 9, 1, 5];
    let n = arr.length;
    let ob = new QuickSort();
    ob.sort(arr, 0, n - 1);
    console.log("sorted array");
    ob.printArray(arr);
