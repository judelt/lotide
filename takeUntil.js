//functions for testing
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

//TakeUntil Function
const takeUntil = function(array, callback) {
  const result = [];
  for(const element of array) {
    if(!callback(element)) {
      result.push(element);
      
    }else{
      break;
    }
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(data1, results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(data2, results2)
console.log(results2);