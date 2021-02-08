const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;

