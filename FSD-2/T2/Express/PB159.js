// Write expressJS script to perform task as asked:
// (A) Create one HTML file which contains text-field named 
// username, one dropdown which contains options of country like 
// India, USA, Canada, Australia. & one submit button.
// (B) Once user clicked on submit button it will jump to next page than 
// username & You are from “country name” which ever selected from 
// drop box should be printed.
// (C) Use get method to request data.\

const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form_for_PB.html"));
})

app.get("/nextpage",(req,res)=>{
    u=req.query.username
    c=req.query.ch
    res.send(`
        <p><b>Username</b>:${u}<p>
        <p><b>Country</b>:${c}<p>
        `);
});

app.listen(3010);