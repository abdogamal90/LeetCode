// let lst = tokens[i];

//   if (lst == "+" || lst == "-" || lst == "*" || lst == "/") {

//     result = eval(`(${stack[i - 2]}  ${lst}  ${stack[i - 1]})`);

//     stack.push(result);

// } else {
//   stack.push(tokens[i]);
// }

/**
 * @param {string[]} tokens
 * @return {number}
 */

// an operator evalute the two elements before it
// i can put elements in stack and check if the pushed element is an operator i evalute the last two element in the stack according to that operator
var evalRPN = function (tokens) {
  let result = 0;

  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      stack.push(Math.trunc((1 / stack.pop()) * stack.pop()));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  //console.log(Math.ceil(eval(result)))
  //console.log(eval(result))
  console.log(stack[0]);
};
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);

// 10 * (6 / ((9 + 3) * -11)) + 17 + 5;
