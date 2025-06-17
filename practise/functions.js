/*
Створити функцію countObjectNumbers, яка приймає об’єкт.
Функція повинна вивести на екран суму всіх параметрів об’єкта, які є числами.
Наприклад об’єкт
const obj = {
    city: “Lviv”,
    count: 323,
    numb; 2
}
countObjectNumbers (obj) повинна вивести “Sum is 325”

*/

const throwErrorIfNotObject = (obj) => {
  if (typeof obj !== "object") {
    throw new Error(
      "functions works with objects. Please pass correct input parameters"
    );
  }
};

const cityObject = {
  name: "Lviv",
  square: 5,
  population: 12,
  countSunnyDays: 150,
  countRainyDays: 120,
  climate: "temperate",
  mayor: "Sadovyi",
};

const countObjectNumbers = (obj) => {
  throwErrorIfNotObject(obj);

  let numbersSum = 0;

  for (const key in obj) {
    const objValue = obj[key];
    if (typeof objValue === "number") {
      numbersSum += objValue;
    }
  }

  return numbersSum;
};

const sum = countObjectNumbers(cityObject);
console.log("Sum is: ", sum);

/*
Створити функцію countObjectStringKeys, яка приймає об’єкт.
Функція повинна вивести на екран кількість параметрів об’єкта, які є строками.
Наприклад об’єкт
const obj = {
    city: “Lviv”,
    count: 323,
    numb; 2
    bestPlace: “Rivne”,
    isValid: true,
    temp: 15
}
countObjectStringKeys (obj) повинна вивести “Object has 2 string keys”

*/

const countObjectStringKeys = (obj) => {
  throwErrorIfNotObject(obj);

  let countOfStringParameters = 0;

  for (const key in obj) {
    const objValue = obj[key];
    if (typeof objValue === "string") {
      countOfStringParameters += 1;
    }
  }

  return countOfStringParameters;
};

const lvivStringPrarams = countObjectStringKeys(cityObject);

console.log("Count of string params is: ", lvivStringPrarams);
