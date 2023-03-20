/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //   let ans = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     let j = 0;
  //     let temp = 1;

  //     while (j < nums.length) {
  //       if (i == j) {
  //           j++;
  //       } else {
  //           temp = temp * nums[j];
  //           j++;
  //       }
  //     }
  //     ans.push(temp);
  //   }
  //   console.log(ans);
  let ans = [];
  prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= postfix;
    postfix *= nums[i];
  }
  console.log(ans);
};

productExceptSelf([1, 2, 3, 4]);
