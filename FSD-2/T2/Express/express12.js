//create a web server that accepts a get request with dynamic user id in the URL 
//also accepts additional data name and age using query parameter
//extract id from root parameters and name and age from query strings 
//returns a JSON object containing all the data
//sample url='http://localhost:3001/user/40?name=Isha&age=19'

const express = require('express');
const app = express();

app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    const name = req.query.name;
    const age = req.query.age;
    res.json({id:id, name:name, age:age});
});

app.listen(3001)