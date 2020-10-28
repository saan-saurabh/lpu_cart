const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//public static path
const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

//set app path
app.set("view engine", "hbs");
app.set("views", views_path);

hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/explore", (req,res)=>{
    res.render("explore");
});

app.get("/notification", (req,res)=>{
    res.render("notification");
});

app.get("/message", (req,res)=>{
    res.render("message");
});

app.get("/bookmark", (req,res)=>{
    res.render("bookmark");
});

app.get("/list", (req,res)=>{
    res.render("list");
});

app.get("/profile", (req,res)=>{
    res.render("profile");
});


app.listen(8000,()=>{
   console.log("Start Your App");
});