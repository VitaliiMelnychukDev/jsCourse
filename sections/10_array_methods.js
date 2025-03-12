const numbersList = [1, 2];
//push
numbersList.push(20);
numbersList.push(45);
console.log("After push: ", numbersList);
//pop
numbersList.pop();
console.log("After pop: ", numbersList);
//unshift
numbersList.unshift(11);
numbersList.unshift(4);
console.log("After unshift: ", numbersList);
//shift
numbersList.shift();
console.log("After shift: ", numbersList);
//delete operator
/*delete numbersList[1];
console.log("After delete: ", numbersList);*/
//splice
numbersList.splice(2, 2);
console.log("After splice: ", numbersList);
numbersList.push(34, 45);
console.log("After push: ", numbersList);
//slice
const partNumbersArray = numbersList.slice(2, 5);
console.log("partNumbersArray: ", partNumbersArray);
//concat
console.log("After concat: ", numbersList.concat([11, 22]));
//includes
console.log("numbersList insludes 45: ", numbersList.includes(45));
console.log("numbersList insludes 453: ", numbersList.includes(453));
//forEach

console.log("numbersList before sum: ", numbersList);
let arraySum = 0;
numbersList.forEach((value) => {
  arraySum += value;
});
console.log("Array Sum: ", arraySum);

const apple = "apple";
const banana = "banana";
const prune = "prune";
const cherry = "cherry";
const tangerine = "tangerine";

const lvivApples = {
  fruitName: apple,
  name: "lvivApples",
  count: 100,
};

const dniproBananas = {
  fruitName: banana,
  name: "dniproBananas",
  count: 343,
};

const odessaPrunes = {
  fruitName: prune,
  name: "odessaPrunes",
  count: 354,
};

const cherryShop = {
  fruitName: cherry,
  name: "cherryShop",
  count: 23,
};

const appleShop = {
  fruitName: apple,
  name: "appleShop",
  count: 25453,
};

const tangerineShop = {
  fruitName: tangerine,
  name: "tangerineShop",
  count: 53,
};

const bananaShop = {
  fruitName: banana,
  name: "bananaShop",
  count: 5366,
};

const appleRivne = {
  fruitName: apple,
  name: "appleRivne",
  count: 434,
};

const fruits = [
  lvivApples,
  dniproBananas,
  odessaPrunes,
  cherryShop,
  appleShop,
  tangerineShop,
  bananaShop,
  appleRivne,
];
//filter
const fruitsFromUkraine = [apple, prune, cherry];

const filteredFruitsFromUkraine = fruits.filter((value) =>
  fruitsFromUkraine.includes(value.fruitName)
);
console.log("filteredFruitsFromUkraine: ", filteredFruitsFromUkraine);

//find
const firstBananaShop = fruits.find((value) => value.fruitName === banana);
console.log("firstBananaShop: ", firstBananaShop);

//findIndex
const firstBananaShopIndex = fruits.findIndex(
  (value) => value.fruitName === banana
);
console.log("firstBananaShopIndex: ", firstBananaShopIndex);

//findLastIndex
/*const firstBananaShopLastIndex = fruits.findLastIndex(
  (value) => value.fruitName === banana
);
console.log("firstBananaShopLastIndex: ", firstBananaShopLastIndex);*/

//map
const fruitShopNames = fruits.map((value) => value.name);
console.log("fruitShopNames: ", fruitShopNames);
//reduce

const fruitsCountArray = fruits.reduce((fruitsArray, value) => {
  console.log("fruitsArray: ", fruitsArray);
  if (!fruitsArray[value.fruitName]) {
    fruitsArray[value.fruitName] = 0;
  }

  fruitsArray[value.fruitName] += value.count;

  return fruitsArray;
}, {});

console.log("fruitsCountArray: ", fruitsCountArray);