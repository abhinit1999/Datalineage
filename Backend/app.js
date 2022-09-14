//import express
const express=require("express");

//app using express
const app=express();

//import cors

//import connection of mongodb
const db=require("./connection");

//import modelschema
const postModel=require("./postModel");

//app configration
//app.use(express.urlencoded({'extends':true}))

app.use(express.json());

//import Routes
const UserMasterRouter=require("./UserRouter");
//Midlleware
app.use("/user",UserMasterRouter);


app.use("/",(req,res)=>{
    res.send("this is real");
})

//app listening on port 5000h
app.listen(4200,()=>{
    console.log("running on port 4200");
})