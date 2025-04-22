const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config();
/******************db connection****************/
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nfmi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err));

/******************routes and their handlers****************/
app.use(express.json());
app.use(cookieParser());

const AuthRouter = require("./Routers/AuthRouter");
const MovieRouter = require("./Routers/MovieRouter");

app.use("/api/auth", AuthRouter);
app.use("/api/movies", MovieRouter);


app.listen(3000, function () {
    console.log("server started on port 3000")
})