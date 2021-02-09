# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @judelt/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: compares the two arrays it takes in and prints out a message telling us if they match or not.
* `assertEqual(actual, expected)`: compares the two values it takes in and prints out a message telling us if they match or not.
* `assertObjectsEqual(actual, expected)`: compares the two objects it takes in and prints out a message telling us if they match or not.
* `countLetters(string)`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: reports back how many instances of each string were found in the allItems array of strings.
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match.
* `findKey(object, callback)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object, value)`: takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `head(array)`: returns the first item in the array.
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: will return a new array based on the results of the callback function.
* `middle(array)`: takes in an array and return the middle-most element(s) of the given array.
* `tail(array)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`: returns a subset of a given array, removing unwanted elements.


