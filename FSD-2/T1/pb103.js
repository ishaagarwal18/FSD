// Write a Node.js program to create an HTTP server using the http 
// module that listens on port 3000 and displays different messages for / 
// and /about routes. Explain how basic routing is implemented using 
// the request object.

var http=require("http");

http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,
            {'content-type':"text/html"}
        );
        res.write("<h1>Welcome to the Home Page</h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,
            {'content-type':"text/html"}
        );
        res.write("<h1>Welcome to the About Page</h1>");
        res.end();
    }
    else{
        res.writeHead(404,
            {'content-type':"text/html"}
        );
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
}).listen(3000,function(){
    console.log("Server is running on port 3000");
});