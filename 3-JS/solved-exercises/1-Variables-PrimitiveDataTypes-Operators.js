/*****************************************
 * Exercises about variables, primitive data types and operators.
 * You are only allowed to resolve them using: 
 *  - let and const
 *  - numbers, boolean, strings, null and undefined
 *  - Arithmetical and logical operators
 *  - Math.max function
 ********************************************/


/**
 * Exercise 1: Create two numeric variables and make add, substract, mult and division operation
 */

console.log('******** EXERCISE 1 **********');

const firstOperand = 30;
const secondOperand = 65;

console.log(firstOperand + secondOperand);
console.log(firstOperand - secondOperand);
console.log(firstOperand * secondOperand);
console.log(firstOperand / secondOperand);
console.log(firstOperand % secondOperand);

/**
 * Exercise 2: Create two string variables and concatenate them
 */
console.log('******** EXERCISE 2 **********');

const firstString = 'My first string';
const secondString = 'My second string';

console.log(firstString + ' ' + secondString);

/**
 * Exercise 3: print the length of result string from las exercise
 */
console.log('******** EXERCISE 3 **********');

console.log((firstString + ' ' + secondString).length);

/**
 * Exercise 4: print the Farenheit degrees from a variable that represents its Celsius degrees
 */
console.log('******** EXERCISE 4 **********');

const celsiusDegrees = 35;
const farenheitDegrees = (celsiusDegrees * 9) / 5 + 32;
console.log(
  celsiusDegrees + ' ºC son ' + farenheitDegrees + ' ºF'
);

/**
 * Exercise 5: print true if a variables is beetwen 10 and 100
 */
console.log('******** EXERCISE 5 **********');

let exampleNumber = 35;
console.log(exampleNumber >= 10 && exampleNumber <= 100);

/**
 * Exercise 6: from celsius calculator exercise done before, print if the result is more than 87ºF
 */
console.log('******** EXERCISE 6 **********');

console.log(farenheitDegrees > 87);

/**
 * Exercise 7: print if a numeric variable is odd or not
 */
console.log('******** EXERCISE 7 **********');

const evenOrOdd = 43;
console.log(evenOrOdd % 2 === 0);

/**
 * Exercise 8: create a var representing the number of childs and indicate if it is 'Familia Numerosa General' or not
 */
console.log('******** EXERCISE 8 **********');

const childs = 3;
console.log(childs >= 3 && childs < 5);

/**
 * Exercise 9: Calculate the IMC of two variables and print if it is 'Obesidad de clase II'
 */
console.log('******** EXERCISE 9 **********');

const height = 1.8;
const weight = 92;
const imc = weight / weight ** 2;
console.log(imc >= 35 && imc <= 39.9);

/**
 * Exercise 10: 
 * Create a var representing your account balance. 
 * Create 4 item's prices simulating your shooping basket
 */
 console.log('******** EXERCISE 10 **********');

const balance=300;
const item1 = 24,
  item2 = 34,
  item3 = 43,
  item4 = 76;

const totalBasket = item1 + item2 + item3 + item4;
console.log(balance - totalBasket >=0);

/**
 * Exercise 11: 
 * Create a var representing your account balance. 
 * Create 4 item's prices simulating your shooping basket
 */
console.log('******** EXERCISE 11 **********');

const annualGrossSalary=53700;
const socialSecurityContributions = annualGrossSalary * 0.0635; // 6,35%
const individualMinimunContribution = 5500;
const taxBase = annualGrossSalary - socialSecurityContributions - individualMinimunContribution;


/**** IRPF CALCULATION ****/
let initialIRPFTierValue = taxBase;
let resultIRPFTier;
/* Calculate FIRST TIER */
resultIRPFTier = Math.max(initialIRPFTierValue - (12450-0), 0);
const firstIRPFTierTaxes = (initialIRPFTierValue - resultIRPFTier) * 0.19;
/* Calculate SECOND TIER */
initialIRPFTierValue = resultIRPFTier;
resultIRPFTier = Math.max(initialIRPFTierValue - (20200-12450), 0);
const secondIRPFTierTaxes = (initialIRPFTierValue - resultIRPFTier) * 0.24;
/* Calculate THIRD TIER */
initialIRPFTierValue = resultIRPFTier;
resultIRPFTier = Math.max(initialIRPFTierValue - (35200-20200), 0);
const thirdIRPFTierTaxes = (initialIRPFTierValue - resultIRPFTier) * 0.3;
/* Calculate FOURTH TIER */
initialIRPFTierValue = resultIRPFTier;
resultIRPFTier = Math.max(initialIRPFTierValue - (60000-35200), 0);
const fourthIRPFTierTaxes = (initialIRPFTierValue - resultIRPFTier) * 0.37;
/* Calculate FIFTH TIER */
initialIRPFTierValue = resultIRPFTier;
resultIRPFTier = Math.max(initialIRPFTierValue - (300000-60000), 0);
const fifthIRPFTierTaxes = (initialIRPFTierValue - resultIRPFTier) * 0.45;
/* Calculate LAST TIER */
const lastIRPFTierTaxes = resultIRPFTier * 0.47;

const totalIRPFTaxes = firstIRPFTierTaxes + secondIRPFTierTaxes + thirdIRPFTierTaxes + fourthIRPFTierTaxes + fifthIRPFTierTaxes + lastIRPFTierTaxes;
const totalIRPFTaxesPercent = totalIRPFTaxes*100/annualGrossSalary;
const totalIRPFTaxesPerMonth = totalIRPFTaxes/12;
const totalNetSalary = annualGrossSalary - socialSecurityContributions - totalIRPFTaxes;
const totalNetSalaryPerMonth = totalNetSalary/12;

console.log('-------------SALARY CALCULATOR------------');
console.log();
console.log('Salario Bruto:\t' + annualGrossSalary);
console.log('Cuotas SSGG:\t' + socialSecurityContributions);
console.log('Base imponible:\t' + taxBase);
console.log('% IRPF:\t\t' + totalIRPFTaxesPercent);
console.log('Total IRPF:\t' + totalIRPFTaxes);
console.log('Total IRPF/mes:\t' + totalIRPFTaxesPerMonth);
console.log('Salario Anual:\t' + totalNetSalary);
console.log('\t---------------------');
console.log('Líquido a percibir:\t' + totalNetSalaryPerMonth);
console.log();
console.log('-------------SALARY CALCULATOR------------');


/**
 * Exercise 12: 
 * To receive a scolarship in Spain, we have to achieve some requirements:
 * - pass 80% of the subjects 
 * - your average results must be more than 6.5
 * Write the code which depending on the results of 8 subjects, prints if a student will obtain a scolarship or not. 
 */
 console.log('******** EXERCISE 12 **********');

const subject1=6,subject2=6, subject3=10, subject4=10, subject5=6, subject6=6, subject7=6, subject8=6;
const average = (subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7 + subject8)/8;
const isSubject1Passed = subject1 >= 5;
const isSubject2Passed = subject2 >= 5;
const isSubject3Passed = subject3 >= 5;
const isSubject4Passed = subject4 >= 5;
const isSubject5Passed = subject5 >= 5;
const isSubject6Passed = subject6 >= 5;
const isSubject7Passed = subject7 >= 5;
const isSubject8Passed = subject8 >= 5;
const isMoreThan80Passed = 
    (isSubject1Passed && isSubject2Passed && isSubject3Passed && isSubject4Passed && isSubject5Passed && isSubject6Passed && isSubject7Passed && isSubject8Passed) // All passed
|| (!isSubject1Passed && isSubject2Passed && isSubject3Passed && isSubject4Passed && isSubject5Passed && isSubject6Passed && isSubject7Passed && isSubject8Passed) // only first fail
|| (isSubject1Passed  && !isSubject2Passed && isSubject3Passed && isSubject4Passed && isSubject5Passed && isSubject6Passed && isSubject7Passed && isSubject8Passed) // only second fail
|| (isSubject1Passed && isSubject2Passed && !isSubject3Passed && isSubject4Passed && isSubject5Passed && isSubject6Passed && isSubject7Passed && isSubject8Passed) // only third fail
|| (isSubject1Passed && isSubject2Passed && isSubject3Passed && !isSubject4Passed && isSubject5Passed && isSubject6Passed && isSubject7Passed && isSubject8Passed) // only fourth fail
|| (isSubject1Passed && isSubject2Passed && isSubject3Passed && isSubject4Passed && !isSubject5Passed && isSubject6Passed && isSubject7Passed && isSubject8Passed) // only fifth fail
|| (isSubject1Passed && isSubject2Passed && isSubject3Passed && isSubject4Passed && isSubject5Passed && !isSubject6Passed && isSubject7Passed && isSubject8Passed) // only sixth fail
|| (isSubject1Passed && isSubject2Passed && isSubject3Passed && isSubject4Passed && isSubject5Passed && isSubject6Passed && !isSubject7Passed && isSubject8Passed) // only seventh fail
|| (isSubject1Passed && isSubject2Passed && isSubject3Passed && isSubject4Passed && isSubject5Passed && isSubject6Passed && isSubject7Passed && !isSubject8Passed) // only eigth fail

console.log(average >=6.5 && isMoreThan80Passed);

