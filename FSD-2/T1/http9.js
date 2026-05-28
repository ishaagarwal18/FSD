// create http web page on which home page display welcome to login page in blue color and font size must be 32px 
// login page shows 1 html file from static URL having form with detail for username,password, submit and reset button
// ,gallery page reflect 1 image "hello.jpg" and any other page shows page not found

var http=require("http");
var url=require("url");
var fs=require("fs");

add="http://localhost:6051/form.html";
q=url.parse(add,true);
process.noDeprecation=true;
http.createServer(function(req,res){
    if(req.url==='/home' ){
        res.writeHead(200,  
            {'content-Type':'text/html'}
        )
        res.write("<p style='color: blue; size: 32px;'>Welcome to login page</p>");
        res.end();
    }
    else if(req.url==="/login"){
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
    }
    else if(req.url==="/gallery"){
        fs.readFile("./laddu.jpeg",
            function(err,data){
                if(err){
                    res.writeHead(404,
                        {'content-type':'text/plain'}
                    )
                    res.end("Image not found");
                }
                else{
                    res.writeHead(200,
                        {'content-type':'image/jpeg'}
                    );
                    res.end(data);
                }
            }
        );
    }
    else{
        res.writeHead(404,
            {'content-type':'text/plain'}
        )
        res.end("Page not found");
    }
}).listen(8180);