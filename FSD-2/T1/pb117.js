// Write a Node.js program that uses the URL module to parse query 
// parameters from the following URL:
// http://localhost:3000/?name=yen&course=NodeJS
// The server should extract the values of name and course and display 
// them in the browser response.
// Explain how the url.parse() method is used to retrieve query 
// parameters.

var http=require("http");
var url=require("url");
var fs=require("fs");

u="http://localhost:3000/?name=yen&course=NodeJS";
q=url.parse(u,true);
process.noDeprecation=true;
console.log(q);

http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,  
            {'content-Type':'text/html'}
        );
        res.write("<h1>Name: "+q.query.name+"</h1>");
        res.write("<h1>Course: "+q.query.course+"</h1>");
        res.end();
    }   
    else{
        res.writeHead(404,
            {'content-Type':'text/plain'}
        );
        res.write("Page Not Found");
        res.end();
    }

}).listen(3000);