let sum = 0;

for (let i = 0; i < 10; i = i + 1) {
  // i = 0, i = 0 + 1 = 1, i = 1 + 1 = 2, i = 2 + 1 = 3, i = 3 + 1 = 4, i = 4 + 1 = 5
  sum = sum + i;
}

console.log("Numbers sum: ", sum);

const numbers = [1, 4, 6, 2, 9, 45];

let arrayForSum = 0;

for (let i = 0; i < numbers.length; i = i + 1) {
  arrayForSum = arrayForSum + numbers[i];
}

console.log("Numbers sum using for: ", arrayForSum);

let arrayWhileSum = 0;

let nI = 0;

while (nI < numbers.length) {
  arrayWhileSum = arrayWhileSum + numbers[nI];
  nI = nI + 1; // nI = 0 + 1 = 1, nI = 1 + 1 = 2, nI = 2 + 1 = 3, nI = 3 + 1 = 4, nI = 4 + 1 = 5, nI = 5 + 1 = 6
}

console.log("Numbers sum using while: ", arrayWhileSum);

const differentTypesArray = [
  false,
  "dsds",
  23,
  4,
  10,
  { type: "T" },
  "dsd",
  16,
];

let arrayNumbersOnlySum = 0;

for (let i = 0; i < differentTypesArray.length; i = i + 1) {
  if (typeof differentTypesArray[i] === "number") {
    console.log("First number: ", differentTypesArray[i]);
    break;
  }
}

for (let i = 0; i < differentTypesArray.length; i = i + 1) {
  if (typeof differentTypesArray[i] !== "number") {
    continue;
  }

  arrayNumbersOnlySum = arrayNumbersOnlySum + differentTypesArray[i];
}

console.log("Array numbers only sum: ", arrayNumbersOnlySum);
