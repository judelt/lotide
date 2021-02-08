const eqArrays = function(array1, array2) {
 
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

module.exports = assertArraysEqual;
