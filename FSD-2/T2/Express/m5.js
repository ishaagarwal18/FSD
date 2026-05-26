// // write an express js script to configure the multer middleware
// perform the following Task
// 1. create an html file named file.html this file contains heading  
// upload your CV in red color and a form with file input and submit button
// 2. create an express js file named file.js and link this js and html file 
// to browse html file on home page. 
// 3. after uploading the file show the message on upload page 
// with og name of file and the directory where file is uploaded.
// 4. save the file in the directory named "example" and file must be stored 
// in format of cv-(timestamp).pdf where cv is the fieldname

var express=require("express");
app=express();
var multer=require('multer');
app.use(express.static(__dirname,{index:'m5.html'}));

var store=multer.diskStorage({
    destination:"lju",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+".pdf");
    }
});

upload=multer({storage:store});

app.post('/upload',upload.single('cv'),(req,res)=>{
    const file=req.file;
    if(file){
        res.send("<h1>file "+file.originalname+" has been uploaded successfully in "+file.destination+"</h1>")
    }
});

app.listen(3050,()=>{
    console.log("server is running on port 3050");
});