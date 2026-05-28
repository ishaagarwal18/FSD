// Write a node.js script to write the text “This is data” to new.txt file. 
// After that append the text “That is data” to same new.txt file. After 
// that read the file & print the file content on console. After finishing 
// read operation print the line “Thank you for using program”. Write, 
// append & read sequence must be maintained & all operations are 
// synchronous.


var fs = require("fs");

fs.writeFileSync("new.txt", "This is data");
fs.appendFileSync("new.txt", "This is data");

var data = fs.readFileSync("new.txt", "utf-8");

console.log(data);
console.log("thanks");