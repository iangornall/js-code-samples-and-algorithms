var validateCC = function(cardNumber) {
  var cardNumberArray = cardNumber.split('');
  cardNumberArray = cardNumberArray.filter(char => !isNaN(char));
  cardNumber = cardNumberArray.join('');
    if (cardNumber.length === 16 && (
        cardNumber.startsWith('6011') ||
        cardNumber.startsWith('4') ||
        cardNumber.startsWith('50') ||
        cardNumber.startsWith('51') ||
        cardNumber.startsWith('52') ||
        cardNumber.startsWith('53') ||
        cardNumber.startsWith('54') ||
        cardNumber.startsWith('55'))){
      return true;
    } 
    if (cardNumber.length === 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
      return true;
    }
    else {
      return false;
    }
}
console.assert(validateCC('6011-1111-1111-1111') === true, 'Valid Discover Card');

console.assert(validateCC('6789-1111-1111-1111') === false, 'invalid');

console.assert(validateCC('3700-0000-0000-0000') === false, 'Too many digits for American Express!');

console.assert(validateCC('6011-1111-0000') === false, 'invalid');