var express=require("express");
app=express();
var nm=require("nodemailer");

var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"ishaagarwal4688@gmail.com",
        pass:"zubt mkss wtbf mfuy"
    }
});

var mailoption={
    from:"ishaagarwal4688@gmail.com",
    to:"rishitabhuva@gmail.com",
    subject:"Hello",
    html:"<h1>Welcome to nodemailer</h1>",
    // attachments:[
    //     {
    //         filename:"IMG-20250823-WA0040.jpg",
    //         path:"E:\\FSD\\FSD-2\\T2\\Express\\Image\\WhatsApp Image 2026-05-04 at 11.02.35 AM.jpeg",
    //     },
    //     {
    //         filename:"IMG-20250823-WA0040.jpg",
    //         path:"E:\\FSD\\FSD-2\\T2\\Express\\Image\\WhatsApp Image 2026-05-04 at 11.00.08 AM.jpeg",
    //     },
    //     {
    //         filename:"IMG-20250823-WA0040.jpg",
    //         path:"E:\\FSD\\FSD-2\\T2\\Express\\Image\\WhatsApp Image 2026-05-04 at 11.02.25 AM.jpeg"
    //     },
    // ]
};

trans.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);}
    else{
        console.log("Email sent"+info.response);
    }
});

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to nodemailer</h1>");
});

app.listen(3010,()=>{
    console.log("server is running on port 3010");
});