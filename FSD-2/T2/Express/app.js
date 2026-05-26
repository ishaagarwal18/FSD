// write  an express js which rest API is created for JSON object named data which contains 
// name,id,branch,city and contact properties.
// 1. On API page it should display all the content
// 2. Appon passing ID on the browser URL it should display the content having that ID(localhost:7899/api/101)
// 3. Appn passing branch on the browser URL it should display the content having that branch
// (localhost:7899/api/branch/it)

express=require("express");
router=express.Router();

const data=[
    {
        id:101,
        name:"ABC",
        branch:"CSE",
        contact:1234567890,
        city:"Ahmedabad"
    },
    {
        id:102,
        name:"BCD",
        branch:"CE",
        contact:12345623234,
        city:"Ahmedabad"
    },
    {
        id:103,
        name:"XYZ",
        branch:"IT",
        contact:1234567890,
        city:"Ahmedabad"
    },
    {
        id:104,
        name:"PQR",
        branch:"IT",
        contact:1234567890,
        city:"Ahmedabad"
    },
    {
        id:105,
        name:"ABC",
        branch:"CSE",
        contact:1234567890,
        city:"Ahmedabad"
    },
    {
        id:106,
        name:"ABC",
        branch:"IT",
        contact:1234567890,
        city:"Ahmedabad"
    },
]

router.get("/",(req,res)=>{
    res.set("content-type","text/html");
    for(i of data){
        res.write("<h3>ID: "+JSON.stringify(i.id)+"Name: "+i.name+"Branch: "+i.branch+"Contact: "+i.contact+"City: "+i.city+"</h3>");
    }
    res.send()
});

router.get("/:id",(req,res)=>{
    var current_data=data.filter((i1)=>i1.id==req.params.id);
    res.set("content-type","text/html");
    if(current_data.length>0){
        res.send(current_data);
    }
    else{
        res.write("<h3>No data found for ID: "+req.params.id+"</h3>");
    }
    res.send();
});


router.get("/branch/:branch",(req,res)=>{
    var cd=data.filter((b)=>b.branch.toLowerCase()===req.params.branch.toLowerCase());
    res.set("content-type","text/html");
    if(cd.length>0){
        res.send(cd);
    }
    else{
        res.write("<h3>No data found for Branch: "+req.params.branch+"</h3>");
    }
    res.send();
});
module.exports=router;