const express=require("express");
const app=express();
const route=express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {enrollCourse,unEnrollCourse}=require("../Controllers/enrollment.controller");

route.post("",enrollCourse);
route.delete("/:id",unEnrollCourse);
module.exports=route;
