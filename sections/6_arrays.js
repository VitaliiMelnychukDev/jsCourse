let numbers = [];
numbers = [1, 2, 4, 6, 9];

console.log(numbers);

const text1 = "Text1";
const lorenIpsumText =
  "loren ipsum is a popular placeholder text, right? can you tell me more about its origins?";
const texts = [text1, "Text2", lorenIpsumText];

console.log(texts);
console.log("Element 0: ", texts[0]);
console.log("Texts array length: ", texts.length);

const samsungProduct = {
  name: "Samsung",
  price: 500,
};

console.log("Samsung price: ", samsungProduct.price);

const products = [
  samsungProduct,
  {
    name: "Apple",
    price: 500,
  },
];

products.push({
  name: "Sony",
  price: 400,
});

products.pop();

products.unshift({
  name: "Sony",
  price: 400,
});

products.shift();

console.log("Products: ", products);

console.log("Products length: ", products.length);
