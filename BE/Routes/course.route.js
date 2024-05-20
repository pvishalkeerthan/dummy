const express=require("express");
const app=express();
const route=express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {getCourse,getCourseById,getCourseByCriteria}=require("../Controllers/course.controller");

route.get("",getCourse);
route.get("/:id",getCourseById);
route.get("/search",getCourseByCriteria);
module.exports=route;
