// a college classroom entry system using middleware 
// 1. when a student excess the classroom log that the student entered the campus 
// 2. verify whether the student has a valid id card if valid allow entry and display a welcome message 
// if not valid denied access

const express = require('express');
const app = express();

const logEntry=(req,res,next)=>{
    console.log("Student entered the campus");
    next();
}   

const verifyID=(req,res,next)=>{
    idCard = false; // Simulating ID card verification
    if(idCard){
        console.log("Valid ID card found");
        next();
    }else{
        console.log("Invalid ID card");
        res.status(403).send("Access denied. Invalid ID card.");ai
    }
}   

app.get("/classroom",logEntry,verifyID,(req,res)=>{
    res.send("Welcome to the classroom!");
});

app.listen(3003,()=>{
    console.log("Server is running on port 3003");
});