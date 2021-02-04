const eqArrays = function(array1, array2) {
 
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let objectsEqual = true;
  if (Object.keys(object1).length === Object.keys(object2).length) { 
    for (const key in object1) {
      //condition statement for array values
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        
        if(!eqArrays(object1[key], object2[key])) {
          objectsEqual = false;
          break;
        };
      } else {
        if(object1[key] !== object2[key]) {
          objectsEqual = false;
          break;
        }
      }
    }
  } else {
    objectsEqual = false;
  }
  return objectsEqual;
};


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};