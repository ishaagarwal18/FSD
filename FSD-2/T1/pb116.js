// Write a Node.js program using the HTTP module to create a server 
// that sends a JSON response when the user visits the /api route.
// The JSON object should contain:
// name as "Rahul", course as "NodeJS",status as "Enrolled"
// Set the appropriate header for JSON data and display "404 – Page 
// Not Found" for any other route

const http=require("http")
obj={
    "name":"Rahul",
    "course":"NodeJS",
    "Status":"Enrolled",
};

http.createServer(function(req,res){
    if(req.url=="/api"){
        res.writeHead(200,
            {'content-Type':'application/json'}
        );
        res.write(JSON.stringify(obj));
        res.end();
    } else {
        res.writeHead(404,
            {'content-Type':'text/html'}
        );
        res.write("<h1>404 - Page Not Found</h1>");
        res.end();
    }
}).listen(3000);