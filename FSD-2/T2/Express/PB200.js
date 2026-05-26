// You have been assigned to develop a user feedback form for a website .
// using Express.js and cookies. Implement the following requirements: 
//  Process a form with the following fields: Name, Email , Message , Rating 
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user 
// submits the form, store their feedback information (name, email, message, 
// and rating) in a cookie named "feedback" that expires in 10 seconds. 
// Display a confirmation message to the user after successfully submitting the 
// form & Create a link to display the feedback details stored in the "feedback" 
// cookie. When the user click to the link, retrieve the feedback information 
// from the cookie and display it on the page also include a link on the 
// feedback details page to Logout. When the user clicks the link, user 
// redirected to home page. Make app.js file use get method in express js. No 
// need to write html file having form elements.
//after 10 sec it will give message "no feedback available"

var express=require("express");
var app=express();
var cp=require("cookie-parser");
var path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(cp());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"200pb.html"));
});

app.get("/submit",(req,res)=>{
    res.cookie("feedback",{
        name:req.query.name,
        email:req.query.email,
        message:req.query.message,
        rating:req.query.rating
    },{maxAge:10000});
    res.send("Feedback submitted successfully! <a href='/feedback'>View Feedback</a>");
});

app.get("/feedback",(req,res)=>{
    if(req.cookies.feedback){
        res.send(`Name: ${req.cookies.feedback.name}<br>Email: ${req.cookies.feedback.email}<br>Message: ${req.cookies.feedback.message}<br>Rating: ${req.cookies.feedback.rating}<br><a href='/logout'>Logout</a>`);   
    }});

app.get("/logout",(req,res)=>{
    res.clearCookie("feedback");
    res.redirect("/");
});

app.listen(4444)