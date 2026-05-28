var express=require("express");
app=express()

app.use(express.static(__dirname,{index:'19.html'}));

app.listen(3000)