var blueMoonCount = function(firstFullMoon, startYear, endYear) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 
                'December'];
  var monthLengths = {January: 31, February: 28, March: 31, April: 30,
                      May: 31, June: 30, July: 31, August: 31, September: 30,
                      October: 31, November: 30, December: 31};
  var month = months[0];
  var day = firstFullMoon;
  var year = startYear;
  var blueMoons = 0;
  while (year <= endYear) {
    if (year % 4 === 0){
      monthLengths['February'] = 29;
    } else {
      monthLengths['February'] = 28;
    }
    for (var i = 0; i < 12; i++){
      month = months[i];
      while (day < monthLengths[month]) {
        day += 29.5;
        if (day < monthLengths[month]){
          blueMoons++;
        }
      }
      day -= monthLengths[month]
    }
    year++;
  }
  return blueMoons;
}
console.log(blueMoonCount(21, 2000, 2999))
console.assert(blueMoonCount(21, 2000, 2000) === 0, 'No blue moons in year 2000')
console.assert(blueMoonCount(21, 2000, 2001) === 1, 'One blue moon in years 2000-2001')
console.assert(blueMoonCount(21, 2000, 2004) === 2, 'Two blue moon in years 2000-2004')