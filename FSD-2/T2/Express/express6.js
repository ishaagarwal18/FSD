//write express js to define one json array of 3 objects having properties name and age of singer.
//sort these object according to age if user req sorted name in url then all names along with age should be printed
//acc to desc arder of age.display this sorted values in sort page and json object on home page

express =require('express')
app=express()
singers=[
    {name:"Arijit Singh",age:35},
    {name:"Shreya Ghoshal",age:37},
    {name:"Neha Kakkar",age:33}
]
app.get("/home",(req,res)=>{
    res.json(singers);
});
app.get("/sort",(req,res)=>{
    sortedSingers = singers.sort((a,b) => b.age - a.age);
    res.set("content-type","text/html");
    res.send("<h1>Sorted Singers by Age (Descending)</h1>" + sortedSingers.map(singer => `<p>${singer.name} - ${singer.age} years old</p>`).join(''));
    // res.send(sortedSingers);
});
app.listen(3001);