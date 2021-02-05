//TESTING FUNCTIONS
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

//MAP FUNCTION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//TEST SCENARIOS
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
const pets = ['dog', 'cat', 'parrot', 'hamster'];
assertArraysEqual(map(pets, pet => `A ${pet} is a very popular pet`), [ 'A dog is a very popular pet',
'A cat is a very popular pet',
'A parrot is a very popular pet',
'A hamster is a very popular pet' ]);





