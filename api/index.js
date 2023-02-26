const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 4500;
require("./db/connection");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./router/routes"));

app.listen(port, () => {
    console.log(`application is listing to port ${port}`);
});