//query parameter

express =require('express')
app=express()
app.get("/data",(req,res)=>{
    name=req.query.name;
    age=req.query.age;
    res.send("Name: "+name+" Age: "+age);
});
app.listen(3001)