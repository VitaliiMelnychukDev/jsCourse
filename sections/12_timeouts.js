//setTimeout
//setInterval
//cleatInterval

const printMessage = (message) => {
  console.log(message);
};

console.log("Start Application");

setTimeout(() => {
  printMessage("setTimeout");
}, 5000);

const printSetInterval = setInterval(() => {
  printMessage("setInterval");
}, 2000);

setTimeout(() => {
  clearInterval(printSetInterval);
}, 20000);

console.log("End Application");
