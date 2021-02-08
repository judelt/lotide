const without = function (source, itemsToRemove) {
  const newArray = [];
  for (const element of source) {
    if(!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
};

module.exports = without;