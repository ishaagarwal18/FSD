// write an express.js script to use of routing method using home , about 
// , contact , temp page and print message. /home- welcome to my home 
// page , /about -welcome to my about page, /contact-welcome to my 
// contact page ,/temp - welcome to my temp page

const express=require("express")
app=express()

app.get("/home",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1 style='color:pink'>Welcome to Home page</h1>")
    res.send()
})

app.get("/about",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1 style='color:pink'>Welcome to About page</h1>")
    res.send()
})

app.get("/contact",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1 style='color:pink'>Welcome to Contact page</h1>")
    res.send()
})

app.get("/temp",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h1 style='color:pink'>Welcome to Temp page</h1>")
    res.send()
})

app.listen(3010)