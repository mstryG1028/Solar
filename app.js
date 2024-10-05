const express=require('express');
const app=express();
const port=1028;
const path = require("path");
const ejsMate = require("ejs-mate");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public"))); 

app.get("/home",(req,res)=>{
res.render("index.ejs");
})

app.get("/home/51_PEGASI_B",(req,res)=>{
    res.render("51_PEGASI_B.ejs")
})
app.get("/home/kepler_186_F",(req,res)=>{
    res.render("kepler_186_F.ejs");
})
app.get("/home/hd_209458_B",(req,res)=>{
    res.render("hd_209458_B.ejs")
})
app.get("/home/proxima_centauri_B",(req,res)=>{
    res.render("proxima_centauri_B.ejs")
})


app.listen(port,()=>{
    console.log(`listening at:${port}`);
});