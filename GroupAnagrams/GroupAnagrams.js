var groupAnagrams = function (strs) {
  let arr = [];
  let arr2 = [];
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
    let sortedKey = strs[i].split("").sort().join("");
    if (obj[sortedKey]) {
      obj[sortedKey].push(strs[i]);
    } else {
      obj[sortedKey] = [strs[i]];
    }
  }
  console.log(Object.values(obj));
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
