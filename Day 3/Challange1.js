const data = require("./input.js");

let gammaBit = [];
let epsilonBit = [];

function proccessData(data) {
  let numberOfOneOcc = 0;
  let numberOfZeroOcc = 0;

  for (let i = 0; i < data[0].split("").length; i++) {
    for (let j = 0; j < data.length; j++) {
      let temp = data[j].split("");
      if (temp[i] == "0") {
        numberOfZeroOcc++;
      } else {
        numberOfOneOcc++;
      }
    }
    console.log({ i: i + 1, numberOfOneOcc, numberOfZeroOcc });

    if (numberOfOneOcc > numberOfZeroOcc) {
      gammaBit.push("1");
      epsilonBit.push("0");
    } else {
      gammaBit.push("0");
      epsilonBit.push("1");
    }
    numberOfZeroOcc = 0;
    numberOfOneOcc = 0;
  }
}

function converToDecimal(input) {
  let numberOfBits = input.length;
  let value = 0;

  for (let i = 0; i < numberOfBits; i++) {
    let bit = parseInt(input[numberOfBits - i - 1]);
    if (bit == 1) {
      value += Math.pow(2, i);
    }
  }
  return value;
}

function getFinalAnswer() {
  return converToDecimal(gammaBit) * converToDecimal(epsilonBit);
}

proccessData(data);

console.log(getFinalAnswer());

// const powerUsage = parseInt(tempEs, 2) * parseInt(tempG, 2);
// console.log(powerUsage);
// console.log(getFinalAnswer());
