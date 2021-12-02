const data = require("./input.js");

let trio = [];

function getLargerMeasures(data) {
  let isFirst = true;
  let prevDepth = 0;
  let largeMeasurements = 0;

  for (let i = 0; i < data.length; i++) {
    currentDepth = data[i];

    if (isFirst) {
      prevDepth = currentDepth;
      isFirst = false;
      continue;
    }

    let depth = currentDepth - prevDepth;

    if (depth > 0) {
      largeMeasurements += 1;
    }
    prevDepth = currentDepth;
  }
  return largeMeasurements;
}

for (let i = 0; i < data.length - 2; i++) {
  let sum = data[i] + data[i + 1] + data[i + 2];
  trio.push(sum);
}

console.log(getLargerMeasures(trio));
