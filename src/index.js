
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if ([...arguments].length !== 0) {
    result = matrix.map((el, i) => {
      if (i % 2 !== 0) {
        return el.reverse();
      } else return el;
    }).flat();
  }

  return result;
}
