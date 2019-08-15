const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connect do DB!");
});

const server = app.listen(3000, () => {
    console.log("server is listening on port", server.address().port);
});
