//write express js script 
//1. create one html file which contains 2 number type input fields 1 dropdown 
//which contains options like select, addition, subtraction, multiplication and division , 1 submit button
//2. The input field must contain value >0 as it will give a message 
//"Please enter a valid number" also user must select any of the formula from the dropdown if not it will give a message "Please select a formula"
//message will be displayed in calc page
//3. If one formula is selected and numbers are entered then respective calculation will be performed in calc page
//use get method to request data from html page and display result in calc page

var express=require("express");
app=express();

app.use(express.static(__dirname,{index:'calc.html'}));

app.get("/calc",(req,res)=>{
    n1=req.query.num1
    n2=req.query.num2
    formula=req.query.operator
    if(n1<=0 || n2<=0){
        res.send("Please enter a valid number");
    }
    if(formula=="+"){
        res.send(n1+n2)
    }
    else if(formula=="-"){
        res.send(n1-n2)
    }
    else if(formula=="*"){
        res.send(n1*n2)
    }
    else if(formula=="/"){
        res.send(n1/n2)
    }
    else{
        res.send("Please select a formula")
    }
});

app.listen(3426)