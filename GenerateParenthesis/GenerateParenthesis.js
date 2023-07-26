/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let stack = [];

  function backtracking(openedBracket, closedBracket) {
    if (openedBracket === closedBracket && openedBracket === n) {
      res.push(stack.join(""));
      return;
    }
    if (openedBracket < n) {
      stack.push("(");
      backtracking(openedBracket + 1, closedBracket);
      stack.pop();
    }
    if (closedBracket < openedBracket) {
      stack.push(")");
      backtracking(openedBracket, closedBracket + 1);
      stack.pop();
    }
  }
  backtracking(0, 0);
  return res;
};
