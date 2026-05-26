//1.html form with username, password and submit button use post methods
//2. On visiting / show the form
//3. on submitting to login page if username is admin then display welcome admin else show 
// please login with admin name and a link back to form

var express=require("express");
app=express()

app.use(express.static(__dirname,{index:'18.html'}));

app.use(express.urlencoded({extended:true}))

app.post("/login",(req,res)=>{
    username=req.query.username
    if(username=="admin"){
        res.send("Welcome admin")
    }
    else{
        res.send("Please login with admin name <a href='/'>Back to form</a>")
    }
})

app.listen(3426)