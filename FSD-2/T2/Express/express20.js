var express=require('express');
var app=express();

app.use(express.static("Frontend",{index:'20.html'}))

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})