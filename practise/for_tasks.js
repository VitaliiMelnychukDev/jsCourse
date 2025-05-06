/*
Завдання 1
Оголосіть масив довільних чисел. Напишіть алгоритм, який виводить всі числа з масиву в консоль. Кожне число повинне бути в окремому рядку.
Для виводу потрібно використати цикл.
*/

console.log("Завдання 1");
const numberArray = [3, 5, 7, 1, 45, 7, 23];

for (let i = 0; i < numberArray.length; i = i + 1) {
  console.log(`Element ${i} equals ${numberArray[i]} `);
}

/*
Завдання 5

Оголосіть масив довільних чисел. Напишіть алгоритм, який обраховує наступні значення:
•	Суму всіх значень, які більші нуля
•	Суму всіх значень, які менші нуля.
•	Кількість чисел, які рівні 0.

Для обрахунку потрібно використати не більше одного циклу і любу кількість умовних операторів.
*/

console.log("Завдання 5");

const task5NumbersArray = [23, 545, -43, 0, -23, 0, 0, 3];

let sumNumbersLess0 = 0;
let sumNumbersMore0 = 0;
let count0 = 0;

for (let i = 0; i < task5NumbersArray.length; i = i + 1) {
  if (task5NumbersArray[i] > 0) {
    sumNumbersMore0 = sumNumbersMore0 + task5NumbersArray[i];
  } else if (task5NumbersArray[i] < 0) {
    sumNumbersLess0 = sumNumbersLess0 + task5NumbersArray[i];
  } else {
    count0 = count0 + 1;
  }
}

console.log("Using for: ");
console.log(`Sum numbers more than 0: ${sumNumbersMore0}`);
console.log(`Sum numbers less than 0: ${sumNumbersLess0}`);
console.log(`Count number equals 0: ${count0}`);

console.log("Using while: ");

let sumNumbersLess0While = 0;
let sumNumbersMore0While = 0;
let count0While = 0;

let j = 0;
while (j < task5NumbersArray.length) {
  if (task5NumbersArray[j] > 0) {
    sumNumbersMore0While = sumNumbersMore0While + task5NumbersArray[j];
  } else if (task5NumbersArray[j] < 0) {
    sumNumbersLess0While = sumNumbersLess0While + task5NumbersArray[j];
  } else {
    count0While = count0While + 1;
  }

  j = j + 1;
}

console.log(`Sum numbers more than 0: ${sumNumbersMore0While}`);
console.log(`Sum numbers less than 0: ${sumNumbersLess0While}`);
console.log(`Count number equals 0: ${count0While}`);
