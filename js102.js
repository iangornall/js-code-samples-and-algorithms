var printNumbers = function (start, end) {
  for (var num = start; num <= end; num++) {
    console.log(num);
  }
}
printNumbers(1, 10);

var printNumbers2 = function (start, end) {
  var num = start;
  while (num <= end) {
    console.log(num);
    num++;
  }
}
printNumbers2(11, 20);

var printSquare = function (num) {
  var stars = '*'.repeat(num);
  for (var i = 0; i < num; i++) {
    console.log(stars);
  };
};
printSquare(5);

var printBox = function (width, height) {
  var borderRow = '*'.repeat(width);
  var innerRow = '*' + ' '.repeat(width - 2) + '*';
  console.log(borderRow);
  for (var i = 0; i < height - 2; i++) {
    console.log(innerRow);
  }
  console.log(borderRow);
}
printBox(6, 4);

var printBanner = function (text) {
  var borderRow = '*'.repeat(text.length + 4);
  console.log(borderRow);
  console.log(`* ${text} *`);
  console.log(borderRow);
}
printBanner('Welcome to DigitalCrafts');

var factors = function (number) {
  factorList = [];
  factor = 1;
  while (factor <= number) {
    if (number % factor === 0) {
      factorList.push(factor);
    }
    factor++;
  }
  return factorList;
}
console.log(factors(16));

var cipher = function (phrase, offset) {
	codedPhrase = []
	for (var i = 0; i <= phrase.length; i++) {
		charCode = phrase.charCodeAt(i)
		if (charCode >= 65 && charCode <= 90) {
			charCode += offset;
			if (charCode > 90) {
				charCode -= 26;
			}
			codedPhrase.push(String.fromCharCode(charCode));
		}
		else if (charCode >= 97 && charCode <= 122) {
			charCode += offset;
			if (charCode > 122) {
				charCode -= 26;
			}
			codedPhrase.push(String.fromCharCode(charCode));
		}
		else {
			codedPhrase.push(phrase.charAt(i))
		}
	}
	return codedPhrase.join('')
}

var decipher = function (phrase, offset) {
	codedPhrase = []
	for (var i = 0; i <= phrase.length; i++) {
		charCode = phrase.charCodeAt(i)
		if (charCode >= 65 && charCode <= 90) {
			charCode -= offset;
			if (charCode < 65) {
				charCode += 26;
			}
			codedPhrase.push(String.fromCharCode(charCode));
		}
		else if (charCode >= 97 && charCode <= 122) {
			charCode -= offset;
			if (charCode < 97) {
				charCode += 26;
			}
			codedPhrase.push(String.fromCharCode(charCode));
		}
		else {
			codedPhrase.push(phrase.charAt(i))
		}
	}
	return codedPhrase.join('')
}

console.log(cipher('Genius without education is like silver in the mine', 11));
console.log(decipher('Rpytfd hteszfe pofnletzy td wtvp dtwgpc ty esp xtyp', 11));

var leetspeak = function (phrase) {
	leetArray = [];
	var letterToNumber = {a: 4, e: 3, g: 6, l: 1, o: 0, s: 5, t: 7};
	for (var i = 0; i < phrase.length; i++) {
		var char = phrase.charAt(i).toLowerCase();
		console.log(char)
		if (char in letterToNumber) {
			leetArray.push(letterToNumber[char]);
		}
		else {
			leetArray.push(char)
		}
		console.log(leetArray);
	}
	return leetArray.join('');
}
console.log(leetspeak('Leet'))

var longLongVowels = function (word) {
	var vowels = ['a', 'e', 'i', 'o', 'u']
	var newWord = word.charAt(i);
	for (var i = 1; i < word.length; i++){
		priorChar = word.charAt(i - 1).toLowerCase();
		char = word.charAt(i).toLowerCase();
		if (vowels.indexOf(char) != -1 && char == priorChar){
			newWord = newWord + char.repeat(4);
		}
		else {
			newWord = newWord + char;
		}
	}
	return newWord;
}
console.log(longLongVowels('Good'))
console.log(longLongVowels('Man'))

var sumNumbers = function (numArray) {
	var sum = 0;
	for (var i = 0; i < numArray.length; i++){
		sum += numArray[i];
	}
	return sum;
}

console.log(sumNumbers([1, 4, 8]))

var positiveNumbers = function(numArray) {
	return numArray.filter(number => number > 0);
}
 var matrixAdd = function(numMatrix1, numMatrix2) {
	 sumMatrix = [];
	 for (var i = 0; i < numMatrix1.length; i++){
		 sumMatrix.push([]);
		 for (var j = 0; j < numMatrix1[i].length; j++){
			 console.log(numMatrix1[i][j]);
			 sumMatrix[i][j] = numMatrix1[i][j] + numMatrix2[i][j];
		 }
	 }
	 return sumMatrix;
 } 
var matrixMultiply = function (matrix1, matrix2) {
  product = [];
  for (var row = 0; row < matrix1.length; row++) {
    product.push([]);
    for (var col = 0; col < matrix2[0].length; col++) {
      product[row].push(0);
      for (var i = 0; i < matrix1[0].length; i++) {
        product[row][col] += matrix1[row][i] * matrix2[i][col];
      }
    }
  }
  return product
}
var rockPaperScissors = function (player1, player2) {
  if (player1 === player2) {
    return 'draw';
  } else if ((player1 === 'rock' && player2 === 'scissors') || 
              (player1 === 'scissors' && player2 === 'paper') ||
              (player1 === 'paper' && player2 === 'rock')) {
                return 'player 1';
  } else {
    return 'player 2';
  }
}
var ticTacToe = function (board) {
  // check row
  for (var i = 0; i < 3; i++) {
    if ((board[i][0] === board[i][1]) && 
        (board[i][1] === board[i][2])) {
          return board[i][0];
    }
  }
  // check column
  for (var j = 0; j < 3; j++) {
    if ((board[0][j] === board[1][j]) &&
        (board[1][j] === board[2][j])) {
          return board[0][j];
    }
  }
  // check forward diagonal
  if ((board[0][0] === board[1][1]) && 
      (board[1][1] === board[2][2])) {
        return board[0][0];
  }
  // check backward diagonal
  if ((board[0][2] === board[1][1]) &&
      (board[1][1] === board[2][0])) {
        return board[0][2];
  }
  return null;
}