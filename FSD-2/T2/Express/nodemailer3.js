// write an Express.js code to send a mail. Create one html file which 
// has one email field and one submit button. Fetch the email address 
// from email field and send a mail to that email address.
// Mail subject should be “Exam Timetable”. Mail body contains “LJ 
// University” in h3 tag and  display data (Date 21/05/25, Exam name 
// FSD-2) in table.

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
app.use(express.static(__dirname,{index:'mail.html'}));

app.post('/sendmail',(req,res)=>{           
    var mailoption={
        from:"ishaagarwal4688@gmail.com",
        // to:req.body.email,
        to:"hiteshjdprajapati@gmail.com",
        // subject:"Exam Timetable",
        // html:"<h3>L J University</h3><table border='1'><tr><th>Date</th><th>Exam Name</th></tr><tr><td>21/05/25</td><td>FSD-2</td></tr></table>"
        subject:"To have fun",
        html:"Kese Hooo??"
    };

trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);}
    else{
        console.log("Email sent"+info.response);
    }
});
});

app.listen(3010,()=>{
    console.log("server is running on port 3010");
});