//Route Parameters

express =require('express')
app=express()
app.get("/calender/:day/event/:ename",(req,res)=>{
    res.send(req.params)
});

app.listen(6001)