const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const webRoute = require("./routes/web/home");

global.mock_db = path.join(__dirname, "./data/mock_db.json");

const app = express();
const port = process.env.PORT || 8080

app.set("view engine", "pug");
app.use("/css", express.static("[ublic/css"));
app.use("/js", express.static("public/js"));
app.use("/", webRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})