cp=require("cookie-parser");
var express=require("express");
app=express();

app.use(cp());

app.get("/cookie",function(req,res){
    res.cookie("name","Express JS");
    res.cookie("fname","Isha");
    res.cookie("lname","Agarwal");
    res.cookie("ID","1",{expires:new Date(Date.now()+20000)});
    res.cookie("email","ishagarwal@example.com",{maxAge:5000});
    res.clearCookie("name");
    res.send(req.cookies);
});

app.listen(3451,function(){
    console.log("server is running at 3451");
});