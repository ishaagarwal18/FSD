const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send('<form action="/details" method="POST"><h1>Employee Details</h1><label>Name</label><input type="text" name="name"><br><br><label>Gender</label><input type="radio" name="gender" value="male"> Male<input type="radio" name="gender" value="female"> Female<input type="radio" name="gender" value="other"> Other<br><br><label>Skills</label><input type="checkbox" name="skills" value="javascript"> JavaScript<input type="checkbox" name="skills" value="python"> Python<input type="checkbox" name="skills" value="java"> Java<br><br><label>Department</label><select><option value="IT">IT</option><option value="CST">CST</option><option value="CSE">CSE</option><option value="CSE-DS">CSE-DS</option><option value="MACP">MACP</option></select><input type="submit" value="Submit"></form>')
});

app.post("/details",(req,res)=>{
    res.send("Employee Details Submitted Successfully"+ "\nName: " + req.body.name+ "\nGender: " + req.body.gender+"\nSkills: " + req.body.skills +"\nDepartment: " + req.body.department);
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});