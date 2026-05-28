//  write an express js to link html , css and js file and show one image 
// o.jpg. And also show the description of image

express=require("express")
app=express()

app.use(express.static(__dirname,{index:'form_for_PB.html'}));

app.listen(3010)