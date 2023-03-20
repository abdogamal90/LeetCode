/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let start = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined && map[s[i]] >= start) {
      // return Object.keys(map).length
      start = map[s[i]] + 1;
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  console.log(max);
};

lengthOfLongestSubstring("pwwkew");
