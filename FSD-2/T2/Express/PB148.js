// write an express.js to implement a form that allows users to submit 
// data via POST request. Write code to create a route that handles the 
// POST request and logs the submitted data to the console.
const express = require("express");

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Home Route with Form
app.get("/", (req, res) => {
    res.send(`
        <h2>User Form</h2>

        <form action="/submit" method="POST">
            
            <label>Name:</label>
            <input type="text" name="name"><br><br>

            <label>Email:</label>
            <input type="email" name="email"><br><br>

            <button type="submit">Submit</button>

        </form>
    `);
});

// POST Route
app.post("/submit", (req, res) => {

    // Get submitted data
    const data = req.body;

    // Log data in console
    console.log("Submitted Data:");
    console.log(data);

    // Response to browser
    res.send(`
        <h2>Form Submitted Successfully</h2>

        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
    `);
});

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});