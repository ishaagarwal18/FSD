// Write an ExpressJS to take a textarea & submit button. After clicking 
// submit button the content of textarea should be represented on next 
// page by writing each sentence (separated by dot) in new line.

express=require("express")
app=express()

app.use(express.static(__dirname,{index:"form_for_PB.html"}))
app.use(express.urlencoded({extended:true}))

app.post("/nextpage",(req,res)=>{
    data=req.body.message
    console.log(data)
    let arr = data.split(".");

    let output = "<h2>Sentences</h2>";

    // Print each sentence in new line
    arr.forEach((item) => {

        item = item.trim();

        if (item.length > 0) {
            output += item + "<br><br>";
        }
    });

    res.send(output);
})

app.listen(3010)