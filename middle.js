// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
//  console.log(array1);
//  console.log(array2);
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// ACTUAL FUNCTION
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

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);