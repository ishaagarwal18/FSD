// create an HTML file for response form and this file should be loaded 
// on home page. Fields are name, email, and submit button.
// Once response is submitted message "Thank you for your response" 
// will be displayed on page response
// and also send mail to the entered email ID, with the submitted response.

var express=require("express");
app=express();
var nm=require("nodemailer");   
app.use(express.urlencoded({extended:true}));
var trans=nm.createTransport({
        host:"smtp.gmail.com",
        port:465,
        auth:{
            user:"ishaagarwal4688@gmail.com",
            pass:"zubt mkss wtbf mfuy"
        }
    }); 

app.use(express.static(__dirname,{index:'response.html'}));

app.post('/res',(req,res)=>{
    var mailoption={
        from:"ishaagarwal4688@gmail.com",
        to:req.body.email,
        subject:"Response Received",
        html:"<h1>Thank you for your response</h1>"
    };

    trans.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err);}
        else{
            console.log("Email sent"+info.response);
        }
    });

    res.send("<h1>Thank you for your response</h1>");
});

app.listen(3010,()=>{
    console.log("server is running on port 3000");
});