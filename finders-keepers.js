var findElement = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return false;
}



// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8
// findElement([1,3,5,9], function(num){reutrn num % 2 === 0})

// Return false
// findElement['Jim','Indian','Marsh','Glitch'], function(str){reutrn str.indexOf('itch) !== -1})