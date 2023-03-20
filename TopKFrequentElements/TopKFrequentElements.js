/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let num = nums.sort();
  let arr = [];
  let map = {};
  for (let i = 0; i < num.length; i++) {
    if (map[num[i]]) {
      map[num[i]]++;
    } else {
      map[num[i]] = 1;
    }
  }

  let sortedMap = new Map([...Object.entries(map)].sort((a, b) => b[1] - a[1]));

  let itr = sortedMap.keys();
  for (let i = 0; i < k; i++) {
    arr.push(itr.next().value);
  }
  console.log(arr);
  return arr;
};

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
