const data = require("./input.js");

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

console.log(getLargerMeasures(data));
