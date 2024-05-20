const express=require("express");
const app=express();
const route=express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const {userSignUp,userLogin,userLogout}=require("../Controllersentication.controller");

route.post("/signup",userSignUp);
route.post("/login",userLogin);
route.post("/logout",userLogout);

module.exports=route;

