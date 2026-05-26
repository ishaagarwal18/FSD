express =require('express')
app=express()
student={
    name:"xyz",
    age:20
};
app.get("/student",(req,res)=>{
    //res.write(JSON.stringify(student));
    //res.send();
    //res.send(student);
    res.json(student);
});
app.listen(3001, function(){
    console.log("Server is running on port 3001");
});