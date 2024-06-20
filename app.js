const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");


const indexRouter = require("./routes/index");

//Include your routes here
const searchrouter= require("./routes/search-results");
const profilerouter= require("./routes/profile");
const productrouter= require("./routes/product");
const usersrouter= require("./routes/users");
const db = require("./database/models");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "proyectoIntegrador",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }
  return next();
});
app.use(function(req, res, next){
  if(req.session.user == undefined && req.cookies.usuarioGuardado != undefined){
    let cookieId = req.cookies.usuarioGuardado;
    db.Usuario.findByPk(cookieId)
    .then(function(user){
      req.session.user = user;
      res.locals.user = req.session.user;     
    }).catch(function(err){
      console.log(err)
    })
  }
  return next();
})
app.use("/", indexRouter);


// Use your routes here
app.use("/search-results", searchrouter);
app.use("/profile", profilerouter);
app.use("/product", productrouter);
app.use("/users", usersrouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
