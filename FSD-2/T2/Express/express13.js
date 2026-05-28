const express = require('express');
const app = express();

const addNAME=(req,res,next)=>{
    req.name = "Isha";
    console.log("Name added to request object");
    next();
}

const collogeNAME=(req,res,next)=>{
    req.collage = "LJU";
    console.log("Collage name added to request object");
    next();
}

const addMarks=(req,res,next)=>{
    req.marks = 90;
    console.log("Marks added to request object");
    next();
}

app.get("/student",addNAME,collogeNAME,addMarks,(req,res)=>{
    // res.json({name:req.name, collage:req.collage, marks:req.marks});
    res.send(`Name : ${req.name}, Collage : ${req.collage}, Marks : ${req.marks}`);
});

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
});