const middle = function(array) {
  const arrayLength = array.length;
  const newArray = [];
  if (arrayLength > 2) {
    //odd numbers
    if (arrayLength % 2 !== 0) {
      const ind = (arrayLength - 1) / 2;
      newArray.push(array[ind]);
     
    //even numbers numbers
    } else if (arrayLength % 2 === 0) {
      ind = (arrayLength / 2) - 1;
      const ind2 = (arrayLength / 2);
      newArray.push(array[ind]);
      newArray.push(array[ind2]);
    }
  }
  return newArray;
};

module.exports = middle;