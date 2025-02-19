// Functions example

const PDV_TAX = 20;

function convertPercentageToDecimalValue(value) {
  return value / 100;
}

function addTaxesToPrice(price) {
  return price + price * convertPercentageToDecimalValue(PDV_TAX);
}

function calcProductPrice(price, discount, areTaxesIncluded = false) {
  let priceWithTaxes = areTaxesIncluded ? price : addTaxesToPrice(price);

  return (
    priceWithTaxes - priceWithTaxes * convertPercentageToDecimalValue(discount)
  );
}

const phonePrice = 8000;
console.log("Phone Price with taxes: ", calcProductPrice(phonePrice, 10, true));
console.log("Phone Price without taxes: ", calcProductPrice(phonePrice, 10));

const laptopPrice = 20000;
const laptopPriceWithTaxes = addTaxesToPrice(laptopPrice);
console.log("Laptop Price: ", calcProductPrice(laptopPriceWithTaxes, 10, true));

const printHello2 = function () {
  console.log("Hello World222!!!");
};

printHello2();

const printHello3 = () => {
  console.log("Hello World333!!!");
};

printHello3();
