const express = require("express");
const homeRouter = require("./web/home");

const router = express.Router();

router.use("/", homeRouter);
module.exports = router