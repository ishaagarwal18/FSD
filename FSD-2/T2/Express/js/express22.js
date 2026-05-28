var express=require("express");
var app=express();
Path=require("path");

css_path=Path.join(__dirname,"../css");
html_path=Path.join(__dirname,"../html");
img_path=Path.join(__dirname,"../Image");

app.use(express.static(css_path));
app.use(express.static(html_path,{index:"22.html"}));
app.use(express.static(img_path));

app.listen(5001,function(){
    console.log("server is running at 5001");
});