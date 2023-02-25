const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({path: "./config.env"})
const port = process.env.PORT || 4000;
require("./db/connection");
//const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const cors = require("cors");
//mongoose.connect('mongodb://localhost:27017/suzukiQuiz', {useNewUrlParser: true});


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());
app.use(require("./router/auth"))



//check login
// app.post("/api/login", (req,res) => {
//     const mspin = req.body.mspin;
//     const regNumber = req.body.regNumber;

//     //console.log(req.body)
//     res.json({mspin,regNumber})
//     //console.log("he")

// });

app.listen(port, ()=>{
    console.log(`application is listing to port ${port}`)
})