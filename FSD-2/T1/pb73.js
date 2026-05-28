// Write a node js script to write the text “You are creating a file” to 
// help.txt file. After that append the text “you are appending data” to 
// same help.txt file. After that read the file and print file contents on 
// console. After finishing read operation , print the line “Thanks for 
// using my program” on console. write ,append,read sequence must be 
// maintain. all read ,write and append operations are asynchronous.

fs = require("fs");
fs.writeFile("help.txt", "you are creating a file",
    function (err) {
        if (err) {
            throw err;
        } else {
            console.log("File created");
            fs.appendFile("help.txt", "you are appending data",
                function (err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("File appended");
                        fs.readFile("help.txt", "utf-8",
                            function (err, data) {
                                if (err) {
                                    throw err;
                                } else {
                                    console.log(data);
                                    console.log("Thanks");
                                }});}});}});