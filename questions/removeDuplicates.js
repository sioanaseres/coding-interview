/*
    Create a function which takes a string and return string without duplicates

    removeDuplicates('aabbcc') -> abc
*/

const removeDuplicates = (str) => {
  let arr = str.split("");
  //   const retStr = new Set(arr);
  //   return [...retStr].join();

  let obj = {};
  arr.forEach((item) => {
    if (!obj[item]) {
      obj[item] = true;
    }
  });
  return Object.keys(obj).join("");
};

console.log(removeDuplicates("aabbcc"));
