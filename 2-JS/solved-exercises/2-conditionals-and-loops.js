/*****************************************
 * Exercises about conditinal sentences and loops.
 * You are only allowed to resolve them using:
 *  - let and const
 *  - numbers, boolean, strings, null and undefined
 *  - Arithmetical and logical operators
 *  - Conditional Sentences
 *  - Loops
 ********************************************/

/**
 * Exercise 1:
 * A road has 90km/h speed limits. If the pollution is greater than 65% the speed limit must be 70km/h.
 * Build an algorithm to print what is the road speed limits depending on the pollution
 */
console.log('******** EXERCISE 1 **********');
const pollutionPercent = 65;
let speedLimit = 90;

if (pollutionPercent > 65) {
  speedLimit = 70;
}

console.log('Current Speed Limit: ' + speedLimit);

/**
 * Exercise 2:
 * A traffic light can be 'green', 'flashing amber', 'amber' or 'red'.
 * Build and algorithm that prints if a car must stop or can go on.
 * PD: flashing amber you can go on
 * PD: amber you must stop
 */
console.log('******** EXERCISE 2 **********');

const trafficLightState = 'green' // green, flashing amber, red, amber

console.log('\t----- IF-ELSE-IF STATEMENT VERSION -----');

const canGoOn = trafficLightState === 'green' || trafficLightState === 'flashing amber';
const mustStop = trafficLightState === 'red' || trafficLightState === 'amber';

if(canGoOn){
    console.log('Puedes Pasar');
}else if(mustStop){ 
    console.log('Tienes que Parar');
}else{
    console.log('No se lo que debo hacer aqui');
}

console.log('\t----- SWITCH STATEMENT VERSION -----');

switch (trafficLightState) {
  case 'green':
  case 'flashing amber':
    console.log('Puedes Pasar');
    break;
  case 'red':
  case 'amber':
    console.log('Tienes que Parar');
    break;
  default:
    console.log('No se lo que debo hacer aqui');
}

/**
 * Exercise 3:
 * Given a subject result, build an algorithm that prints your result in letters:
 * SUSPENSA (<5)
 * APROBADA(5-<7),
 * NOTABLE(7-<9),
 * SOBRESALIENTE(9-<10)
 * MATRICULA DE HONOR (10)
 */
console.log('******** EXERCISE 3 **********');

const subjectResult = 10;

if(subjectResult < 5){
    console.log('SUSPENSA');
}else if(5<=subjectResult && subjectResult<7){
    console.log('APROBADA');
}else if(7<=subjectResult && subjectResult<9){
    console.log('NOTABLE');
}else if(9<=subjectResult && subjectResult<10){
    console.log('SOBRESALIENTE');
}else{
    console.log('MATRICULA DE HONOR');
}


/**
 * Exercise 4: Given two numbers print the greatest
 */
console.log('******** EXERCISE 4 **********');

const firstNumber = 46;
const secondNumber = 47;

console.log('\t----- IF-ELSE-IF STATEMENT VERSION -----');

if(firstNumber>secondNumber){
    console.log(firstNumber);
}else{
    console.log(secondNumber);
}

console.log('\t----- BONUS MATH VERSION -----');

console.log(Math.max(firstNumber,secondNumber));

/**
 * Exercise 5: Given a number, loop from 0 to that number printing if it's even or odd
 */
console.log('******** EXERCISE 5 **********');

const inputNumber=20;

console.log('\t----- FOR STATEMENT VERSION -----');

for(let i=0; i<=inputNumber; i++){
    if(i%2===0){
        console.log(i+' is odd');
    }else{
        console.log(i+' is even');
    }
}

console.log('\t----- WHILE STATEMENT VERSION -----');

let i_exercise5 = 0;
while(i_exercise5<= inputNumber){
    if(i_exercise5%2===0){
        console.log(i_exercise5+' is odd');
    }else{
        console.log(i_exercise5+' is even');
    }
    i_exercise5++;
}

/**
 * Exercise 6:
 * Build an algorithm that loops over numbers from 1 to 100 and prints:
 *  - 'Fizz' if the current number is multiple of 3
 *  - 'Buzz' if the current number is multiple of 5
 *  - 'FizzBuzz' if the current number is multiple of 3 and 5
 */
console.log('******** EXERCISE 6 **********');

console.log('\t----- FOR STATEMENT VERSION -----');

for (let i = 1; i <= 100; i++) { 
  let output = '';
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }
  console.log(i+': ' + output);
}

console.log('\t----- WHILE STATEMENT VERSION -----');
let i_exercise6 = 1
while (i_exercise6 <= 100) {
    let output = '';
    if (i_exercise6 % 3 === 0) {
      output += 'Fizz';
    }
    if (i_exercise6 % 5 === 0) {
      output += 'Buzz';
    }
    console.log(i_exercise6+': ' + output);
    i_exercise6++
}

/**
 * Exercise 7: print the following pattern. It mus be printed using loops
 *      *
 *      **
 *      ***
 *      ****
 *      *****
 *      ****
 *      ***
 *      **
 *      *
 */
console.log('******** EXERCISE 7 **********');

const tringleHeight = 5; // change the height and see what it happends

console.log('\t----- FOR STATEMENT VERSION -----');

/** 
 * LOOP OVER INCREMENTAL ROWS
*/
for(let i=1; i<=tringleHeight; i++){
    /**
     * LOOP OVER COLUMNS === GENERATE NUMBER OF *
     */
    let asterics = '';
    for(let j=1; j<=i; j++){
        asterics+='*';
    }
    console.log(asterics);
}

/** 
 * LOOP OVER DECREMENTAL ROWS
*/
for(let i=tringleHeight-1; i>0; i--){
    /**
     * LOOP OVER COLUMNS === GENERATE NUMBER OF *
     */
    let asterics = '';
    for(let j=1; j<=i; j++){
        asterics+='*';
    }
    console.log(asterics);
}

console.log(); // Line break
console.log('\t----- WHILE STATEMENT VERSION -----');

let i_exercise7=1;
/** 
 * LOOP OVER INCREMENTAL ROWS
*/
while(i_exercise7<=tringleHeight){
    /**
     * LOOP OVER COLUMNS === GENERATE NUMBER OF *
     */
    let asterics = '';
    let j=1;
    while(j<=i_exercise7){
        asterics+='*';
        j++;
    }
    console.log(asterics);
    i_exercise7++;
}

/** 
 * LOOP OVER DECREMENTAL ROWS
*/
i_exercise7 = tringleHeight-1;
while(i_exercise7>0){
    /**
     * LOOP OVER COLUMNS === GENERATE NUMBER OF *
     */
     let asterics = '';
     let j=1;
     while(j<=i_exercise7){
         asterics+='*';
         j++;
     }
     console.log(asterics);
     i_exercise7--;
}
console.log(); // Line break

/**
 * Exercise 8: Calculate, using while loop, the fibonacci value of a given number
 */
console.log('******** EXERCISE 8 **********');

const fibNumber = 8; // fib(n) = fib(n-1) + fib(n-2); fib(0)=0; fib(1)=1;

console.log('\t----- FOR STATEMENT VERSION -----');

let result_for; // Store the result
let fib_prev_2_for = 0; // Initial value represents fib(0)
let fib_prev_1_for = 1; // Initial value represents fib(1)

if(fibNumber===0){ // Base case fib(0)
    result_for = fib_prev_2_for;
}

if(fibNumber===1){ // Base case fib(1)
    result_for = fib_prev_1_for;
}

for(let i=2; i<=fibNumber; i++){ // Other cases fib(n); loop control var starts in 2 until fibnumber
    result_for = fib_prev_1_for + fib_prev_2_for; // fib(n') = fib(n'-1) + fib(n'-2)
    fib_prev_2_for = fib_prev_1_for; // In the next for loop step, n'-2 will be n'-1
    fib_prev_1_for = result_for; // In the next for loop step, n'-1 will be n'
}

console.log('Fibonacci ' + fibNumber + ': ' + result_for);



console.log('\t----- WHILE STATEMENT VERSION -----');

let result_while; // Store the result
let fib_prev_2_while = 0; // Initial value represents fib(0)
let fib_prev_1_while = 1; // Initial value represents fib(1)

if(fibNumber===0){ // Base case fib(0)
    result_while = fib_prev_2_while;
}

if(fibNumber===1){ // Base case fib(1)
    result_while = fib_prev_1_while;
}

let i_exercise8=2;
while( i_exercise8<=fibNumber){ // Other cases fib(n); loop control var starts in 2 until fibnumber
    result_while = fib_prev_1_while + fib_prev_2_while; // fib(n') = fib(n'-1) + fib(n'-2)
    fib_prev_2_while = fib_prev_1_while; // In the next for loop step, n'-2 will be n'-1
    fib_prev_1_while = result_while; // In the next for loop step, n'-1 will be n'
    i_exercise8++;
}

console.log('Fibonacci ' + fibNumber + ': ' + result_while);