express=require("express");
app=express();
multer=require('multer');
app.use(express.static(__dirname,{index:'m1.html'}));
var store=multer.diskStorage({
    destination:"LJU",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
var upload=multer({storage:store});
app.post('/uploadfile',upload.array('myfile',5),(req,res)=>{
    const file=req.files;
    if(file){
        res.send("<h1>file "+file.originalname+" has been uploaded successfully in "+file.destination+"</h1>")
    }
});
app.listen(3040,()=>{
    console.log("server is running on port 3040");
});