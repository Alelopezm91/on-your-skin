require ("dotenv").config()

const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const passport=require('passport')
const cors = require("cors");

require("./config/db.config");
require("./config/hbs.config");
require("./config/passport.config")

const sessionConfig=require('./config/session.config')

const app= express ()

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.options("*", cors());
app.use(cors());

app.get("/like/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.use(sessionConfig);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=>{
  res.locals.currentUser= req.user;
  next();
})

const router = require("./config/routes.config");
app.use("/", router);

//Errors
app.use((req, res, next) => {
  next(createError(404, "Page not found"));
});

app.use((error, req, res, next) => {
  console.log(error);
  let status = error.status || 500;

  res.status(status).render("error", {
    message: error.message,
    error: req.app.get("env") === "development" ? error : {},
  });
});




const PORT= Number(process.env.PORT || 3000) 
app.listen(PORT, () =>{
    console.log(`Server listening on port http://localhost:${PORT}`);
})