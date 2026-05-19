const express = require("express");
const app = express();

app.use(express.json());

// REGISTER
app.post("/register", (req, res) => {
    res.send("User registered successfully");
});

// LOGIN
app.post("/login", (req, res) => {
    res.send("User logged in successfully");
});

app.listen(3001, () => {
    console.log("User Service running on port 3001");
});
