const fs = require("fs");
//
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
//
// console.log("程序执行结束!");


// const fs = require("fs");
const name = require('./index');
console.log(name);


// const strings = fs.readFileSync('./input.txt', {encoding: "utf-8"});
// console.log(strings);

fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("程序执行结束!");
