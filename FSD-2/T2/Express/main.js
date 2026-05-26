const express=require("express");
app=express();

api=require("./app");
app.use("/api",api);

app.listen(7899,()=>{
    console.log("Server is running on port 7899");
});