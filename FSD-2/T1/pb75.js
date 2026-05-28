// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white 
// space in .txt file.
// 2.append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.Find maximum number from that and append with message 
// “maximum number=” in same file.

var fs = require("fs");

fs.writeFileSync("file.txt", "32 73 12 5 16");

var data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

var array = data.split(" ");
console.log(array);

var a = array.sort((a, b) => a - b);
console.log(a);