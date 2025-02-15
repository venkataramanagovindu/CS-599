/*
Problem Submission Link: https://leetcode.com/problems/product-of-array-except-self/submissions/1535428928

Explain your approach in 3-5 steps:
Explanation: 
1. The basic approach is using the prefix and suffix product of each element and creating the final product array
2. Instead of using additinal memory, we can iterate ove the array twise and update the single result array
3. first loop is to calculate the prefix and second loop is to calculate suffix from last

Time Complexity (in terms of N):
O(N) - to be precise O(2N) - One loop for prefix  another for prefix

Space Complexity (in terms of N):
O(1)  -  No additinal space being used
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // let prefix = Array(nums);
    // let suffix = Array(nums);
    // let product = Array(nums);

    // prefix[0] = 1;
    // for(let i = 1; i < nums.length; i++)
    // {
    //     prefix[i] = prefix[i - 1] * nums[i - 1]
    // }

    // suffix[nums.length - 1] = 1;
    // for(let i = nums.length - 2; i >= 0; i--)
    // {
    //     suffix[i] = suffix[i + 1] * nums[i + 1]
    // }

    // console.log(prefix)
    // console.log(suffix)
    // for(let i = 0; i < prefix.length; i++)
    // {
    //     product[i] = prefix[i] * suffix[i];
    // }
    // return product;
    let n = nums.length;
    let product = new Array(n);
    product[0] = 1;

    for(let i = 1; i < n; i++)
    {
        product[i] = product[i - 1] * nums[i - 1]
    }

    let suffix = 1;

    for(let i = n - 1; i >= 0; i--)
    {
        product[i] *= suffix ;
        suffix *= nums[i]
    }

    return product
};