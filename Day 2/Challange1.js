const data = require("./input.js");

function findPosition(data) {
  let horizontalDistance = 0;
  let depthDistance = 0;

  for (let i = 0; i < data.length; i++) {
    let temp = data[i].split(" ");
    let dis = parseInt(temp[1]);
    switch (temp[0]) {
      case "forward":
        horizontalDistance += dis;
        break;
      case "down":
        depthDistance += dis;
        break;
      case "up":
        depthDistance -= dis;
        break;
      default:
        break;
    }
  }

  return horizontalDistance * depthDistance;
}

console.log(findPosition(data));
