// write node js script to handle event to write data,append data and then read the file. display data in console.
// do all the operation async .
const fs = require("fs");
const e = require("events");
e1 = new e();

e1.on("write", () => {
  fs.writeFile("sample.txt", "Hello ", function (err) {
    if (err) throw err;
    else {
      console.log("File written");
      e1.emit("append");
    }
  });
});
e1.on("append", () => {
  fs.appendFile("sample.txt", "Byee", function (err) {
    if (err) throw err;
    else {
      console.log("File appended");
      e1.emit("read");
    }
  });
});
e1.on("read", () => {
  fs.readFile("sample.txt", "utf-8", function (err, data) {
    if (err) throw err;
    else {
      console.log("file read");
      console.log(data);
    }
  });
});
e1.emit("write");
