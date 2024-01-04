/* Implement your own Array.prototype.map().
    Usage -> [1,2,3].myMap(num => num * 2)
    Output -> [2,4,6]
*/

Array.prototype.myMap = function (cb) {
  let arr = this;
  let result = [];

  arr.forEach((element) => {
    cb;
  });

  return result;
};
