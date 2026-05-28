// Write an ExpressJS application that creates a login form containing 
// fields for username and password along with a submit button. The 
// form data should be sent to the server using the POST method. 
// Implement an authentication middleware that checks whether the 
// entered username is "admin" and the password is "1234". If the 
// credentials are correct, the application should display the message 
// "Login Successful". Otherwise, it should display "Invalid 
// Credentials"

const express=require("express")
const path=require("path")

app=express()
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form_for_PB.html"))
});

function auto(req,res,next){
    let u=req.body.username
    let p=req.body.password
    if(u==="admin" && p==="1234"){
        next();
    }
    else{res.send("Invalid Credentials")}
}

app.post("/login",auto,(req,res)=>{
    res.send(`<h2>Login Successful</h2>`)
});

app.listen(3010)