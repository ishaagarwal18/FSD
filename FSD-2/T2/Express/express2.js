express =require('express')
app=express()
app.get("/", function(req,res){
    res.type("text/plain");
    res.send("<h1>Hey you</h1>");
});
app.get("/about", function(req,res){
    res.type("text/html");
    res.send("<h1>Be happy</h1>");
});
app.listen(3001, function(){
    console.log("Server is running on port 3001");
}); 