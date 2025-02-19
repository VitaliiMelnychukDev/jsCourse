//Object, properties, methods
const object1 = new Object();

const PDV_TAX = 20;

function convertPercentageToDecimalValue(value) {
  return value / 100;
}

function addTaxesToPrice(price) {
  return price + price * convertPercentageToDecimalValue(PDV_TAX);
}

const phoneObject = {
  price: 100,
  discount: 30,
  areTaxesIncluded: true,
  calculateDiscount() {
    let priceWithTaxes = this.areTaxesIncluded
      ? this.price
      : addTaxesToPrice(this.price);

    return (
      priceWithTaxes -
      priceWithTaxes * convertPercentageToDecimalValue(this.discount)
    );
  },
};

console.log("Phone price original: ", phoneObject.calculateDiscount());

phoneObject.price = 200;
phoneObject.discount = 20;

console.log("New phone price: ", phoneObject.calculateDiscount());

// Memory references

console.log("For loop");
const numbers = [10, 34, 564, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// For of
console.log("For of loop");
for (let value of numbers) {
  console.log(value);
}

// For in
console.log("For in loop");
for (let numberIndex in numbers) {
  console.log(numbers[numberIndex]);
}

//For each
console.log("forEach method");
numbers.forEach((value, index) => {
  console.log("Value: ", value, "Index: ", index);
});

console.log("For in for objects");
const phoneProduct = {
  name: "Samsung",
  price: "20000",
  model: "S24",
};

for (let phoneValue in phoneProduct) {
  console.log(`${phoneValue}: ${phoneProduct[phoneValue]}`);
}
