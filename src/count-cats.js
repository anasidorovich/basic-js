module.exports = function countCats(matrix) {
  return matrix.flat().filter(str => '^^' === str).length;
};
