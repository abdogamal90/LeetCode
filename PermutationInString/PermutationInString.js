/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let s1map = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1map[s1[i]]) {
      s1map[s1[i]] += 1;
    } else {
      s1map[s1[i]] = 1;
    }
  }

  let iterator = s2.length - s1.length;

  for (let i = 0; i <= iterator; i++) {
    let s2map = {};
    let count = 0;
    for (let j = i; j < i + s1.length; j++) {
      if (s2map[s2[j]]) {
        s2map[s2[j]] += 1;
      } else {
        s2map[s2[j]] = 1;
      }
    }

    for (let item in s1map) {
      if (s1map[item] === s2map[item]) {
        count++;
      } else {
        break;
      }
    }
    if (count === Object.keys(s1map).length) {
      return true;
    }
  }

  return false;
};
