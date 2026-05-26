// write an express js to upload file with size limit of 10mb to specific 
// direectory data on the server and in this folder file . 
// file must be stored in format of Lju-file.pdf
// where lju is the field name

var express=require('express');
var app=express();
var multer=require('multer');

app.use(express.static(__dirname,{index:'m4.html'}));
var store=multer.diskStorage({
    destination:"LJU",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-file.pdf");
    }
});

var upload=multer({storage:store,limits:{fileSize:10*1024*1024}});
app.post('/uploadfile',upload.single('lju'),(req,res)=>{
    const file=req.file;
    console.log(file);
    if(file){
        res.send("<h1>file "+file.fieldname+" has been uploaded successfully in "+file.destination+"</h1>")
    }
});

app.listen(3040,()=>{
    console.log("server is running on port 3040");
});