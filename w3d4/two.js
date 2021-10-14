const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

var sum = 0;
const sumNumber = () => {
  readline.question("Number: ", (number) => {
    if (isNumeric(number)) {
      sum += Number(number);
      sumNumber();
    } else {
      if (number === "stop") {
        console.log(sum);
        readline.close();
      } else {
        console.log("Enter a valid number");
        sumNumber();
      }
    }
  });
};

sumNumber();
