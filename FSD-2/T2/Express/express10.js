const express = require('express');
app=express();

app.use(express.urlencoded({extended:true}));

app.get("/home",(req,res)=>{
    res.send('<form action="/result" method="POST"><label>T1</label><input type="number" name="t1"><br><label>T2</label><input type="number" name="t2"><br><label>T3</label><input type="number" name="t3"><br><label>T4</label><input type="number" name="t4"><br><input type="submit" value="average"></form>')
});
app.post("/result",(req,res)=>{
    t1=parseInt(req.body.t1);
    t2=parseInt(req.body.t2);
    t3=parseInt(req.body.t3);
    t4=parseInt(req.body.t4);
    avg=(t1+t2+t3+t4)/4;
    res.send("Average: "+avg);
});

app.listen(3001)