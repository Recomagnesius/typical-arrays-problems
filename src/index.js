
exports.min = function min(array) {
  if (array != undefined) {
    let minArray = array;
    minArray.sort((a, b) => b - a);
    return minArray[0];
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array != undefined) {
    let maxArray = array;
    maxArray.sort((a, b) => b - a);
    maxArray = maxArray[maxArray.length - 1];
    return maxArray;
  }
  else {
    return 0;
}

exports.avg = function avg (array) {
  if (array != undefined) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      sum += array[i];
      return sum / array.length;
    }
  }
  else {
    return 0;
}
