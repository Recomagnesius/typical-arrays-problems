
exports.min = function min(array) {
  if (array != undefined) {
    // let minArray = array;
    // minArray.sort((a, b) => b - a);
    // return minArray[0];
    let min = Math.min(...array);
    if (min === Infinity) {
      return 0;
    }
    else if (min != Infinity) {
      return min;
    }
    
  }
  else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array != undefined && array.length != 0) {
    // let maxArray = array;
    // maxArray.sort((a, b) => b - a);
    // maxArray = maxArray[maxArray.length - 1];
    let max = Math.max(...array);
    return max;
  }
  else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array != undefined && array.length != 0) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  else {
    return 0;
  }
}