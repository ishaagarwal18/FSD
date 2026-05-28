const myevent = require("events");
e1 = new myevent();
e1.on("greet", () => {
  console.log("Hello User..");
});
e1.emit("greet");
