/*

Given an array , implement a function which reduces nesting of the array

const arr = [1, [2], [3, [4]]];

flatten(arr) ->  [1, 2, 3, 4]

Try to implement both recursive and iterative version

*/

// let flattenedArr = [];

const flatten = (arr, flattenedArr = []) => {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatten(element, flattenedArr);
    } else {
      flattenedArr.push(element);
    }
  });

  return flattenedArr;
};

console.log(flatten([1, [2], [3, [4]]]));

const flatten2 = (arr) => {
  let flattenedArr = [];

  let stack = [...arr];

  while (stack.length > 0) {
    let element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      flattenedArr.push(element);
    }
  }

  return flattenedArr.reverse();
};

console.log(flatten2([1, [2], [3, [4]]]));
