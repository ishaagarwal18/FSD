const express=require('express')
app=express()
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send('<h1>User form</h1><form action="/user" method="post"><input type="text" name="username"><input type="submit"></form>')
});
app.post("/user",(req,res)=>{
    res.send("Username: "+req.body.username);
});
app.listen(3001)
