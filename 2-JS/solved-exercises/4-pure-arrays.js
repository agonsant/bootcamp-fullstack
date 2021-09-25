/*****************************************
 * Exercises about arrays.
 * You are only allowed to resolve them using:
 *  - let and const
 *  - numbers, boolean, strings, null and undefined
 *  - Arithmetical and logical operators
 *  - Conditional Sentences
 *  - Loops
 *  - Math
 *  - functions (no arrow-functions)
 *  - Arrays
 ********************************************/

/**
 * 1- (Easy) create an array with te first primes numbers
 */
 console.log('******** EXERCISE 1 **********');

 const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

 /**
 * 2-(Easy) prints the third number
 */
  console.log('******** EXERCISE 2 **********');

  console.log(primes[2]);

/**
 * 3-(Easy) Mult the 7th number by 3rd and print
 */
console.log('******** EXERCISE 3 **********');

console.log(primes[2] * primes[6]);

/**
 * 4-(Easy) Swap nine position with one position in the array
 */
 console.log('******** EXERCISE 4 **********');

const aux = primes[9];
primes[9] = primes[1];
primes[1] = aux;


/**
 * 5-(Medium) Adds all elements from the array
 */

console.log('******** EXERCISE 5 **********');
let primesAcc=0;
for(let i=0; i<primes.length; i++){
   primesAcc += primes[i];
}



/**
 * 6- (Easy) Write a function that given a number and an array, returns the first position of an element.
 *  -1 if the element is not found
 */

 console.log('******** EXERCISE 6 **********');

function indexOf(num, arr){
   let found=false, i=0;
   while(!found && i<arr.length){
      found = arr[i]===num;
      i++;
   }
   i--;
   if(!found) i=-1;
   return i;
}


/**
 * 7- (Easy) Write a function that prints the next pattern
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - -                                                                                           
- - - - - - - - - - 
 */

 console.log('******** EXERCISE 7 **********');
const side = 10;
 for(let i=1; i<=side; i++){
    let pattern = '';
    for (let j=1; j<=side; j++){
       pattern +='-';
    }
    console.log(pattern);
 }

 
/**
 * 8. (Medium) Write a function that given a bidimensional array, returns an array with the diagonal values
 */
 console.log('******** EXERCISE 8 **********');
 
 function getDiagonal(arr) {
   let arrResult = [];
   for (let i = 0; i < arr.length; i++) {
      arrResult[i] = arr[i][i];
   }
 
   return arrResult;
 }

 /**
 * 9- (Hard) Write a function that sorts asc a given array of number 
 */

console.log('******** EXERCISE 9 **********');

console.log('\t----- USING BUBBLE SORT ALGO\'S -----');

function sortingUsingBubble(arr){
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                let t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
    return arr;
}

console.log('\t----- USING ARRAY SORT FUNCTION, SEE js-array-functions FILE -----');

function compareNumbers(a,b){
   return a-b;
}

function usingSortFunction(arr){
   return arr.sort(compareNumbers);
}


/**
 * 10 (Leyend) -Alphabet Soup Game:
 *  - Write a function that given an string array of words, generates a bidimensional array setting random the words horizontally, vertically or diagonal (an alphabet soup board)
 *  - Write a function that given an Alphabet Soup Board and a word (string), tells if the string is in the board.
 */

 console.log('******** EXERCISE 10 **********');

 /** TBD **/

