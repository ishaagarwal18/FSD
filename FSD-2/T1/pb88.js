// Write a script to define two JSON objects named as “division1” and 
// “division2” having an array to store 5 integer numbers. Write this 
// object in a file named XYZ.txt using file system. Define third array 
// as result which gives output as explained below: Suppose first array 
// contains base value and second array contains power value and then 
// third array will give output as: a^b.For example: first array[0]=2 and 
// second array[0]=3 then it should return 8 in third array[0] .Also 
// append this result in XYZ.txt and as well as on console.

var obj = {
  division1: [6, 7, 8, 9, 10],
  division2: [2, 3, 2, 3, 2],
  result: [],
};
var fs = require("fs");

fs.writeFileSync("PB88.txt", obj.division1 + "\n" + obj.division2);

for (i in obj.division1) {
  obj.result[i] = Math.pow(obj.division1[i], obj.division2[i]);
}

fs.appendFileSync("PB88.txt", "\nSolution after a^b " + obj.result);

console.log(obj.result);
