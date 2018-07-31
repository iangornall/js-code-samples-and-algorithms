// function steamrollArray(arr) {
//   var i = 0
//   while (i<arr.length) {
//       if (Array.isArray(arr[i])) {
//           arr = arr.slice(0, i).concat(arr[i], arr.slice(i + 1, arr.length))
//       }
//       else {
//           i++;
//       }
//   }
//   return arr;
// }


function steamrollArray(arr) {
  if (Array.isArray(arr)) {
    var newArray = steamrollArray(arr[0]);
    if (arr.length > 1) {
      return newArray.concat(steamrollArray(arr.slice(1, arr.length)));
    } else {
      return newArray;
    }
  }
  return [arr];
}

console.log(steamrollArray([1, 2, [2], [3, [4, 5]]]));