// write a nodejs script to load a simple html program defined as static on nodejs web server and print 
// its content as html content

var http=require("http");
var url=require("url");
var fs=require("fs");

add="http://localhost:6051/table.html";
q=url.parse(add,true);
// console.log(q)
process.noDeprecation=true;

http.createServer(function(req,res){
    // console.log("helo")
    fs.readFile("."+q.pathname,
        function(err,data){
            if(err){
                res.writeHead(404,
                    {'content-type':'text/plain'}
                )
                res.end("Page not found");
            }
            else{
                res.writeHead(200,
                    {'content-type':'text/html'}
                );
                res.end(data);
            }
        }
    );
}).listen(8180);