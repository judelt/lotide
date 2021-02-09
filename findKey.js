const findKey = (object, callback) => {
  let result = '';
  for (const key in object) {
  
    if (callback(object[key])) {
      result = key;
      break;
    }
    result = undefined;
  }
  return result;
};

module.exports = findKey;