var caseConvert = function (str, conversionType) {
  var convertedStr;
  if (conversionType === 'snakecase') {
    convertedStr = str.split('');
    for (var i = 0; i < convertedStr.length; i++){
      if (convertedStr[i].toUpperCase() === convertedStr[i]){
        convertedStr[i] = convertedStr[i].toLowerCase();
        if (i !== 0){
          convertedStr.splice(i, 0, '_');
        }
      }
    }

  } else if (conversionType === 'camelcase') {
    var convertedStr = str.split('_');
    for (var i = 1; i < convertedStr.length; i++) {
      convertedStr[i] = convertedStr[i].charAt(0).toUpperCase() + convertedStr[i].substring(1);
    }
  }
  return convertedStr.join('');
 };

 console.assert(caseConvert('a', 'camelcase') === 'a', 'Should not change single lowercase letter.');

 console.assert(caseConvert('ThisIsMyString', 'snakecase') === 'this_is_my_string', 'Converted from camel case to snake case.' );

 console.assert(caseConvert('this_is_my_string', 'camelcase') === 'thisIsMyString', 'Converted from snake to camel.')

 