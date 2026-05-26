// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit
// button using get method.
// 1) After clicking submit button the content of submitted details
// should be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted
// “message” will display on “/message” page. (Use next() to route page)
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let userData = {};

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <h2>Login Form</h2>
        <form action="/login" method="get">
            <label>UserName:</label>
            <input type="text" name="username"><br><br>

            <label>Password:</label>
            <input type="password" name="password"><br><br>

            <label>Message:</label><br>
            <textarea name="message"></textarea><br><br>

            <button type="submit">Submit</button>
        </form>
    `);
});

// Middleware using next()
function vowelCount(req, res, next) {
    const msg = userData.message || "";

    let count = 0;

    for (let ch of msg.toLowerCase()) {
        if ("aeiou".includes(ch)) {
            count++;
        }
    }

    req.vowels = count;

    next();
}

// Login Page
app.get("/login", (req, res) => {

    userData = {
        username: req.query.username,
        password: req.query.password,
        message: req.query.message
    };

    res.send(`
        <h2>Submitted Details</h2>

        <p><b>UserName:</b> ${userData.username}</p>
        <p><b>Password:</b> ${userData.password}</p>
        <p><b>Message:</b> ${userData.message}</p>

        <a href="/message">Show Vowel</a>
    `);
});

// Message Page
app.get("/message", vowelCount, (req, res) => {

    res.send(`
        <h2>Vowel Count</h2>

        <p>Message: ${userData.message}</p>
        <p>Total Vowels: ${req.vowels}</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});