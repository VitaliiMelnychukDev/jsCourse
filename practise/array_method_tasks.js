/*
Оголосіть масив довільних чисел. 
Знайдіть індекс першого елементу масиву, який більше 0. Для пошуку використайте метод findIndex();
Виведіть індекс в консоль.
*/

const numbersArray = [-343, -4, 0, -3, 43, 45, 2];

const indexOfElementMoreThanZero = numbersArray.findIndex((elem) => {
  return elem > 0;
});

console.log(
  "Index of first element that is more than 0: ",
  indexOfElementMoreThanZero
);

/*
Оголосіть масив строк
Створіть новий масив у якому будуть строки, які містять 'Hi' з попереднього масиву. Для створення нового масиву використайте метод filter(). 
Виведіть новий масив в консоль.
*/

const strArray = ["test", "Hi world!", "232", "Hi", "End"];

const filteredArrayWithoutHi = strArray.filter((elem) => {
  return elem.includes("Hi");
});

console.log("Array with hi: ", filteredArrayWithoutHi);

/*
Оголосіть масив, який містить температуру в цельсіях. 
Перетворіть даний масив в новий масив, який містить температуру в фаренгейтах. Формула для перетворення: F = C * 9/5 + 32. Для перетворення в новий масив використайте метод map(). 
Виведіть новий масив в консоль.
*/

const temperatureInCelsius = [34, 12, 23, 0, -13, 4, -2];

const temparateureInFahrenheit = temperatureInCelsius.map((celsius) => {
  const fahrenheitValue = (celsius * 9) / 5 + 32;

  return Number(fahrenheitValue).toFixed(1);
});

console.log("temparateure in fahrenheit: ", temparateureInFahrenheit);
