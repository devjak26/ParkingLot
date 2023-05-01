const express = require("express");
const cors = require('cors');
const Router=require("./routes/route.js");
const {pool}=require("./utils/db.js");

const app=express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json())
app.use("/", Router);

module.exports = app;