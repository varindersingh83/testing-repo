// Buliding an interest rate calculator
console.log("############################\n");
console.log("We are in this file.\nHello !");
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
console.log(`monthly income = ${monthlyIncome.toFixed(2)}`);
const taxAnnual = 33;
