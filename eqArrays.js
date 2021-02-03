const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  let truthy = false;
  for (let i = 0; i < array2.length; i++) {
    truthy = array1[i] === array2[i] ? true : false;   
  }
  return truthy;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);