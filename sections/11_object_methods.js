const productApple = {
  name: "Apple",
  price: 1000,
  color: "black",
};

//Object Methods

//keys
console.log("Object keys: ", Object.keys(productApple));

//values
console.log("Object values: ", Object.values(productApple));

//entries
console.log("Object entries: ", Object.entries(productApple));
console.log("---------------------------------------");
Object.entries(productApple).forEach((productAppleEntry) => {
  console.log(`Object key ${productAppleEntry[0]} = ${productAppleEntry[1]}`);
});
console.log("---------------------------------------");
Object.entries(productApple).forEach(([elementKey, elementValue]) => {
  console.log(`Object key ${elementKey} = ${elementValue}`);
});
console.log("---------------------------------------");
//...rest
const { name: productAppleName } = productApple;
console.log("Name is", productAppleName);

const productNames = ["Apple", "Samsung", "LG", "Xiaomi"];

const [firstName, secondName, ...otherElements] = productNames;

console.log(`first element is ${firstName}`);
console.log(`first element is ${secondName}`);
console.log(otherElements);

//assign
const productAppleGeneral = {
  name: "Apple",
  price: 1000,
  color: "black",
};

const productAppleTech = {
  memory: 1024,
  CPU: 2048,
  camera: {
    front: 10,
    main: 24,
  },
};

console.log("Product apple all (rest operator): ", {
  ...productAppleGeneral,
  ...productAppleTech,
});

console.log(
  "Product apple all Object assign: ",
  Object.assign({}, productAppleGeneral, productAppleTech)
);

//delete operator
delete productAppleTech.memory;
console.log("Tech object after delete: ", productAppleTech);

//operator in
console.log("Product apple tech contains CPU: ", "CPU" in productAppleTech);
console.log(
  "Product apple tech contains CPU: ",
  "notValid" in productAppleTech
);

//freeze

const objectToFreeze = {
  name: "Test",
};

console.log("objectToFreeze: ", objectToFreeze);

objectToFreeze.name = "Test 2";

console.log("objectToFreeze: ", objectToFreeze);

Object.freeze(objectToFreeze);

objectToFreeze.name = "Test 3";

console.log("objectToFreeze: ", objectToFreeze);
