// Write a node.js script using Event handling to perform following 
// tasks in sequence:
// a) Create file in it named abc.txt and enter data into it.
// b) Append data to that file abc.txt and print message “Data Appended 
// Successfully”.
// c) Read the content of the file abc.txt and print the content on http 
// web server.
// d) Do all the operations of File using asynchronous file system 
// module. And Lastly print the message “All operations performed 
// successfully” on console

var fs = require("fs");
var EventEmitter = require("events");
var e = new EventEmitter();
var http = require("http");

http.createServer(function (req, res) {

    e.on("create", () => {
        fs.writeFile("abc.txt", "write file\n", function (err) {
            if (err) {
                throw err;
            } else {
                console.log("File Created");
                e.emit("append");
            }
        });
    });

    e.on("append", () => {
        fs.appendFile("abc.txt", "append file", function (err) {
            if (err) {
                throw err;
            } else {
                console.log("File append");
                e.emit("read");
            }
        });
    });

    e.on("read", () => {
        fs.readFile("abc.txt", "utf-8", function (err, data) {
            if (err) {
                throw err;
            } else {
                console.log("File readed");

                res.writeHead(200, {
                    "content-type": "text/html"
                });

                res.end(data);
            }
        });
    });

    e.emit("create");

}).listen(3520);