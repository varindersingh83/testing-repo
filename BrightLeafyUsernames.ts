// Buliding an interest rate calculator

// shortcut vs code
// code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

// console.log("############################\n");
// console.log("We are in this file.\nHello !");

// import "inquirer";

let amount = "A";
let principal = "P";
let rate = "r";
let time = "t";
let num = "1";
const birth = 6;
let currentMonth = 9;
const MONTH_IN_YEAR = 12;
let monthsUntilBirthday = MONTH_IN_YEAR - currentMonth + birth;
const annualIncome = 50000;
const monthlyRent = 2000;
const monthlyIncome = annualIncome / MONTH_IN_YEAR;
const monthlySaving = monthlyIncome - monthlyRent;
// console.log(`monthly income = ${monthlyIncome.toFixed(2)}`);
const annualTaxPercentage = 0.33;
const annualTaxDollars = annualIncome * annualTaxPercentage;
const annualIncomeWithTaxDeducted =
  annualIncome - annualTaxPercentage * annualIncome;
// console.log(
//   `annual income with tax deducted = ${annualIncomeWithTaxDeducted.toFixed(2)}`
// );
// conditions are needed in java script 'a>b, a<b, a!=b, etc

console.log(10 > 5 && 7 > 1); // true
console.log(10 < 5 && 7 > 1); // false
console.log(10 > 5 && 7 < 110); // true

const ELIGIBLE_AGE = 21;
let yourAge = 18;

if (yourAge >= ELIGIBLE_AGE) {
  console.log("Welcome to the Bar!");
} else {
  console.log("Sorry! you are not allowed to enter the Bar.");
}

console.log(`your age = ${yourAge}`);
while (yourAge < ELIGIBLE_AGE) {
  yourAge += 1;
  console.log(`your age is increased = ${yourAge}`);
}

if (yourAge >= ELIGIBLE_AGE) {
  console.log("Welcome to the Bar!");
} else {
  console.log("Sorry! you are not allowed to enter the Bar.");
}

//
let str = "";
for (let i = 0; i < 9; i++) {
  str = str + "#";
  console.log(str);
}

// let yourAge = prompt("What is your age?");

/*
add tax percentage  = 33
display income with tax deducted 
display monthly Saving after tax deduction 
*/
