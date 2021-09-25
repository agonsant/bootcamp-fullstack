/*****************************************
 * Exercises about functions.
 * You are only allowed to resolve them using:
 *  - let and const
 *  - numbers, boolean, strings, null and undefined
 *  - Arithmetical and logical operators
 *  - Conditional Sentences
 *  - Loops
 *  - Math
 *  - functions (no arrow-functions)
 ********************************************/

/**
 * 1- write a method that mults three numbers
 */
console.log('******** EXERCISE 1 **********');
function mult(a, b, c) {
  return a * b * c;
}

/**
 * 2- write a function that concats 'Hello' to an input string
 */
console.log('******** EXERCISE 2 **********');

function concat(str) {
  return str + 'Hola';
}

/**
 * 3- write a function that returns the AND oparation of two input booleans
 */
console.log('******** EXERCISE 3 **********');

function and(bool_1, bool_2) {
  return bool_1 && bool_2;
}

/**
 * 4- write a function that given a number as input (n), returns a string of n asterisks
 */
console.log('******** EXERCISE 4 **********');
function repeatAsterisks(cuantity) {
  let result = '';
  for (let i = 1; i <= cuantity; i++) {
    result = result + '*';
  }
  return result;
}

/**
 * 5- write a function that mults two input numbers without using * operator
 */
console.log('******** EXERCISE 5 **********');
function multWithout(a, b) {
  let result = 0;
  const isAMinusZero = a < 0;
  const isBMinusZero = b < 0;
  if (isAMinusZero) {
    a = -a;
  }
  if (isBMinusZero) {
    b = -b;
  }
  for (let i = 1; i <= a; i++) {
    result += b;
  }

  if ((isAMinusZero && !isBMinusZero) || (!isAMinusZero && isBMinusZero)) {
    result = -result;
  }

  return result;
}

function reverse(number) {
  const numberToString = number + '';
  let result = '';
  for (let i = numberToString.length - 1; i >= 0; i--) {
    const charRemoved = numberToString.charAt(i);
    result = result + charRemoved;
  }

  return parseInt(result);
}


/**
 *  (Medium) 6 - Write a function that reverse a given number (EJ: 3456 => 6543)
 */
console.log('******** EXERCISE 6 **********');

console.log('\t----- STRING VERSION -----');

function reverseUsingStrings(number) {
  const numberToString = Number(number).toString();
  let result = '';
  for (let i = numberToString.length - 1; i >= 0; i--) {
    result += numberToString.charAt(i);
  }

  return parseInt(result);
}

console.log('\t----- NUMBER VERSION -----');

function reverseUsingMaths(num) {
  let removedNumber = num;
  let result = 0;
  while (removedNumber !== 0) {
    const reminder = removedNumber % 10; // Gets last digit
    removedNumber = Math.trunc(removedNumber / 10); // update current number removing last digit
    result = result * 10 + reminder; // add the digit removed
  }
  return result;
}

/**
 *  (Easy) 7 - Write a function that returns a boolean indicating if an input number is palindromic or not
 * Hint: use the function built in exercise 6
 */
 console.log('******** EXERCISE 7 **********');

 function isPalindromic(num){
    return num === reverse(num);
}

/**
 *  (Easy) 8 - write a function that returns the input parameter data type
 */
 console.log('******** EXERCISE 8 **********');

 function getDataType(input){
    return typeof input;
}

/**
 *  (Easy) 9 - Write different functions for area and perimeter calculator of Rect, Square, triangle and Circle
 */

 console.log('******** EXERCISE 9 **********');

 /* TRIANGLE */

 function area(b,h){
   return b*h/2;
 }

 function perimeter(s1, s2, s3){
   return s1 + s2 + s3;
 }

 /* SQUARE */

 function area(s){
  return s**2;
}

function perimeter(s){
  return 4*s;
}


 /* RECT */

 function area(s1,s2){
  return s1*s2;
}

function perimeter(s1, s2){
  return 2*s1 + 2*s2;
}

 /* CIRCLE */

 function area(r){
  return Math.PI*(r**2);
}

function perimeter(r){
  return 2*Math.PI*r;
}


 /**
 *  (Easy) 10 - Write the functions of a basic calc (add, substract, mult, division, percents)
 */

console.log('******** EXERCISE 10 **********');

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b; 
}

function mult(a, b) {
  return a * b; 
}

function div(a, b) {
  return a / b; 
}

function percent(a, b) {
  return a*b/100; 
}

function pow(a, b) {
  return a ** b;
}

 /**
 *  (Easy) 11 - Write the functions that returns if a given URL is a domain of Github.com
 */

  console.log('******** EXERCISE 11 **********');

  function isGithubDomain(url){
    return url.startsWith('https://github.com/') || 
           url.startsWith('https://raw.githubusercontent.com/')
  }


 /**
 *  (Easy) 12 - Write a function calc that recieves two operands and a function representing the operation to calc
 * and runs the operation for the given operands
 * EX: calc(3,4,add) returns  7
 */

  console.log('******** EXERCISE 12 **********');
  
  function calc(a, b, operation) {
    return operation(a, b); 
  }


   /**
 *  (Easy) 13 - Write a function that validates the spanish ID's. 
 * more info (http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie)
 */

    console.log('******** EXERCISE 13 **********');
    function isNIE(documentNumber) {
      //z4624624Y
      const firstChar = documentNumber.charAt(0);
      return firstChar === 'X' || firstChar === 'Y' || firstChar === 'Z';
    }
    
    function isValidDocumentFormat(documentNumber) {
      let isValid = true;
      let i = 0;
      while (isValid && i <= documentNumber.length - 2) {
        const currentChar = documentNumber.charAt(i);
        isValid = parseInt(currentChar) >= 0; // Is valid if it is a number
        i++;
      }
      return documentNumber.length >= 2 && documentNumber.length <= 9 && isValid;
    }
    
    function validateNIForNIE(documentNumber) {
    
      let isValid = false;
      if (typeof documentNumber !== 'string') {
        return isValid;
      }
      documentNumber = documentNumber.toUpperCase();
      if (isNIE(documentNumber)) {
        switch (documentNumber.charAt(0)) {
          case 'X':
            documentNumber = documentNumber.replace('X', '0');
            break;
          case 'Y':
            documentNumber = documentNumber.replace('Y', '1');
            break;
          case 'Z':
            documentNumber = documentNumber.replace('Z', '2');
            break;
        }
      }
      if (isValidDocumentFormat(documentNumber)) {
        const controlDigit = documentNumber.charAt(documentNumber.length - 1);
        const strDocumentNumber = documentNumber.substring(
          0,
          documentNumber.length - 1
        );
        const controlResult = parseInt(strDocumentNumber) % 23;
        const controlListStr = 'TRWAGMYFPDXBNJZSUVHLCKE';
        isValid = controlDigit === controlListStr.charAt(controlResult);
      }
      return isValid;
    } 
