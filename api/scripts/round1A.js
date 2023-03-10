const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("./files/spreadsheet01.csv");
const reader = readline.createInterface({ input: stream });

let data = [];

reader.on("line", row => {
  // This will split a row string into an array
  // And then push into the data array
  data.push(row.split(","));
});

reader.on("close", () => {
  //  Reached the end of file
  console.log(data);
});

