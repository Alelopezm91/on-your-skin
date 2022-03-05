require ("dotenv").config()

const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const passport = require("passport")

require("./config/db.config");
const sessionConfig = require('./config/session.config');

const app= express ()


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

require("./config/hbs.config");
require("./config/passport.config")

app.use(sessionConfig);

app.use(passport.initialize())
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
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