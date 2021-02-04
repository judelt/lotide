const eqArrays = function(array1, array2) {
 
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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



