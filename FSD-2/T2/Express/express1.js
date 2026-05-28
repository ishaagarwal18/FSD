const express = require('express')
const app = express()

app.get("/" , function(req,res){
  res.set("Content-Type", "text/html")
  res.send("Hello World")
})

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:3001`)
})
