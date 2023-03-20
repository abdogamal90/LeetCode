/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      diff = prices[right] - prices[left];
      if (diff > max) {
        max = diff;
      }
    } else {
      left = right;
    }
    right++;
  }
  console.log(max);
};
maxProfit([7, 6, 4, 3, 1]);
