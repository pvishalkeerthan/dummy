const express=require("express");
const app=express();
const route=express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {getProfile,editProfile,getProfileCourses,getProfileFavorites,getProfileCompleted}=require("../Controllers.controller");


//User profile endpoints
route.get("",getProfile);
route.put("/edit",editProfile);
route.get("/enrolled",getProfileCourses);
route.get("/favorites",getProfileFavorites);
route.get("/completed",getProfileCompleted);
module.exports=route;
