express =require('express')
app=express()
student={
    name:"siya",
    age:20,
    designation:"Developer"
};
app.get("/home",(req,res)=>{
    res.json(student);
});
app.get("/about",(req,res)=>{
    st=student.designation+"\n"+student.name +" is\n"+student.age +" years old";
    res.type("text/plain");
    res.write(st)
    res.send();
});
app.get("/contact",(req,res)=>{
    res.send(student.name);
});
app.listen(3001, function(){
    console.log("Server is running on port 3001");
});