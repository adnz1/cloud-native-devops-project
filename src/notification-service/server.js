const express = require("express");
const app = express();

app.post("/send", (req, res) => {
    res.send("Notification sent successfully");
});

app.listen(3004, () => {
    console.log("Notification Service running on 3004");
});