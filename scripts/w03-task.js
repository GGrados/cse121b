/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(n1, n2) {
  return parseInt(n1) + parseInt(n2);
}

function addNumbers() {
  const addend1 = document.querySelector("#add1").value;
  const addend2 = document.querySelector("#add2").value;
  return (document.querySelector("#sum").value = add(addend1, addend2));
}

const addNumbersButton = document.querySelector("#addNumbers");
addNumbersButton.addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (n1, n2) {
  return parseInt(n1) - parseInt(n2);
};

const subtractNumbers = function () {
  let minued = document.querySelector("#subtract1").value;
  let subtrahend = document.querySelector("#subtract2").value;
  let difference = subtract(minued, subtrahend);
  return (document.querySelector("#difference").value = difference);
};

const subtractNumbersButton = document.querySelector("#subtractNumbers");
subtractNumbersButton.addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (n1, n2) => parseInt(n1) * parseInt(n2);

const mulitplyNumbers = () => {
  let factor1 = document.querySelector("#factor1").value;
  let factor2 = document.querySelector("#factor2").value;
  let product = multiply(factor1, factor2);
  return (document.querySelector("#product").value = product);
};

const multiplyNumbersButton = document.querySelector("#multiplyNumbers");
multiplyNumbersButton.addEventListener("click", mulitplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = function (n1, n2) {
  return parseInt(n1) / parseInt(n2);
};

const divideNumbers = function () {
  let dividend = document.querySelector("#dividend").value;
  let divisor = document.querySelector("#divisor").value;
  let quotient = divide(dividend, divisor);
  return (document.querySelector("#quotient").value = quotient);
};

const divideNumbersButton = document.querySelector("#divideNumbers");
divideNumbersButton.addEventListener("click", divideNumbers);

/* Decision Structure */

const date = new Date();

let year;

year = date.getFullYear();

document.querySelector("#year").textContent = year;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const newArray = [];
for (let i = 1; i < 14; i++) {
  newArray.push(i);
}

document.querySelector("#array").textContent = newArray;

/* Output Odds Only Array */

const odds = newArray.filter((number) => number % 2 != 0);
document.querySelector("#odds").textContent = odds;

/* Output Evens Only Array */

const evens = newArray.filter((number) => number % 2 == 0);
document.querySelector("#evens").textContent = evens;

/* Output Sum of Org. Array */

const initialValue = 0;
const newArraySum = newArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

document.querySelector("#sumOfArray").textContent = newArraySum;

/* Output Multiplied by 2 Array */

const multiplyBy2 = (n) => n ** 2;
// Pass a function to map
const newArrayMapped = newArray.map(multiplyBy2);
document.querySelector("#multiplied").textContent = newArrayMapped;

/* Output Sum of Multiplied by 2 Array */

function sumThenMultiply(array) {
  let mappedArray = array.map((x) => x ** 2);
  let sumElements = mappedArray.reduce((a, c) => a + c, 0);
  return sumElements;
}

let sumOfMultiplied = sumThenMultiply(newArray);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
