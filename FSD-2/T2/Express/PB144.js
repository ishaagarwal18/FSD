// write an express.js script to load an HTML file having username and
// password and submit button. On clicking submit button. It should
// jump on "check" page using "POST" method. If username is "admin"
// , then jump on next middleware to print "welcome... admin" , if
// username is not "admin" , then stay on same middleware to print
// "warning msg" in red color.

const express=require("express")
app= express()

app.use(express.static(__dirname, {index: 'form_for_PB.html'}))
app.use(express.urlencoded({extended:true}))

app.post("/check",(req,res)=>{
    uname=req.body.username
    if(uname=="admin"){
        res.send("welcome... admin")
    }
    else{
        res.send("<h1 style='color:red'>warning msg</h1>")
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})