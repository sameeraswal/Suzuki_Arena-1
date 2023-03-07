const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/connection");
const port = process.env.PORT || 4500;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./router/routes"));

app.listen(port, () => {
  console.log(`application is listing to port ${port}`);
});
