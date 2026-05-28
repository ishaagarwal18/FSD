// Write a nodeJS script to fire an event named calculate which 
// calculates the total marks of 5 subjects about of 25 marks and 
// displays the total marks on console as an output.The calculate event 
// fires another event name percentage which takes total marks as 
// argument and percentage should get displayed in console.

var event=require("events");
var e1=new event();

e1.on("calculate",function calculate(){
    var total=0;
    for (i=0;i<5;i++){
        num=Math.random()*25;
        console.log(num);
        total=total+Math.floor(num);
    }
    console.log("Total marks: " + total);
    e1.emit("percentage", total);
})

e1.on("percentage",function percentage(total){
    var per=(total/125)*100;
    console.log("Percentage: " + per + "%");
})
e1.emit("calculate");
