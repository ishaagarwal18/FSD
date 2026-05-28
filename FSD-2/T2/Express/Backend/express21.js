var Path=require("path")
var express=require('express');
var app=express();

staticpath=Path.join(__dirname,'../Frontend');
app.use(express.static(staticpath,{index:"21.html"}));

app.listen(3000)