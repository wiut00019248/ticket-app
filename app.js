const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

global.mock_db = path.join(__dirname, "./data/mock_db.json");

const app = express();
const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    return res.json({
        message: "Hello, World!"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})