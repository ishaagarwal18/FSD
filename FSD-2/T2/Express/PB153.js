const express = require("express");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Load login.html on localhost:3010
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Data Page
app.post("/data", (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    // Checkbox values
    let remember = req.body.remember ? "Checked" : "Not Checked";
    let subscribe = req.body.subscribe ? "Checked" : "Not Checked";

    res.send(`
        <h2>User Details</h2>

        <p><b>Username:</b> ${username}</p>
        <p><b>Password:</b> ${password}</p>

        <p><b>Remember:</b> ${remember}</p>
        <p><b>Subscribe:</b> ${subscribe}</p>

        <form action="/" method="GET">
            <button type="submit">Logout</button>
        </form>
    `);
});

// Server
app.listen(3010, () => {
    console.log("Server running on http://localhost:3010");
});