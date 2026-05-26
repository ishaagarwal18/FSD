// Write a Node.js program using the events module to create an event 
// emitter, define three events (start, process, end) that print messages to 
// the console, and fire all three events in order.

var event=require("events");
var e1=new event();
e1.on("start",()=>{
    console.log("Event start fired");
    e1.emit("process");
});

e1.on("process",()=>{
    console.log("event process fired");
    e1.emit("end");
})

e1.on("end",()=>{
    console.log("event end fired");
})
e1.emit("start");