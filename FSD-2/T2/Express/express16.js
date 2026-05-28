//write express js script to print message in next line splitting by dot 
//and use get method to submit data 
//html file contains form of text area for the message and submit button

// var express=require("express")
// app=express()

// app.use(express.static(__dirname,{index:'2.html'}));

// app.get("/submit",(req,res)=>{
//    let message = req.query.M
//    console.log(req.query)
// let mes = message.split(".")
// res.send(mes.join("<br>"))
// }) 
// app.listen(3456)

var express = require("express")
var app = express()

app.use(express.static(__dirname, { index: '16.html' }));

app.get("/submit", (req, res) => {
    console.log(req.query)

    let message = (req.query.M).split(".")
   

    for(let i=0;i<message.length;i++){
        res.write(`<h1>${message[i]}</h1>`)
    }
    res.send()
})

app.listen(3456)