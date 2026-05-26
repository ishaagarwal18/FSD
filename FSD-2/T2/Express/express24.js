//write an express js to set cookies of submitted values perform following task
//1. Create an html file which contains a form with fields firstname lastname password and a sibmit button 
//2. once form submitted store this entered value to the respective cookies on "/nextpage" 
//3. then redirect user to "/admin" page and clear the cookie set for the lastname. display remaining set 
// of cookies using post method

var express=require("express");
var app=express();
var cp=require("cookie-parser");
var path=require("path");

app.use(cp());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"24.html"));
});

app.post("/nextpage",(req,res)=>{
    res.cookie("firstname",req.body.fName);
    res.cookie("lastname",req.body.lName);
    res.cookie("password",req.body.password);
    res.redirect("/admin");
});

app.get("/admin",(req,res)=>{
    res.clearCookie();
    res.send(req.cookies);
});

app.listen(1235,()=>{
    console.log("server is running on port 1234");
});