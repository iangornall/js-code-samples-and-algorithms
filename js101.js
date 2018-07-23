var hello = function (name) {
  console.log(`Hello, ${name}!`);
};
hello('Mustache');

var hello2 = function (name = 'world') {
  console.log(`Hello, ${name}!`);
};
hello2();

var madlib = function (name, subject) {
  return `${name}'s favorite subject in school is ${subject}.`
};
console.log(madlib('Anushka', 'art'));

var tipAmount = function (billAmount, serviceLevel) {
  serviceToTip = {good: .2, fair: .15, bad: .1};
  return billAmount * serviceToTip[serviceLevel];
};
console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

var totalAmount = function (billAmount, serviceLevel) {
  return billAmount + tipAmount(billAmount, serviceLevel);
};
console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

var splitAmount = function (billAmount, serviceLevel, numPeople) {
  return totalAmount(billAmount, serviceLevel) / numPeople;
};
console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));