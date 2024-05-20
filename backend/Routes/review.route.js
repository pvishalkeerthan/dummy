const express=require("express");
const app=express();
const route=express.Router();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const{addReview,updateReview,deleteReview}=require("../Controllers/review.controller");
//review Endpoints
route.post("",addReview);
route,put("/:id",updateReview);
route.delete("/:id",deleteReview);
module.exports=route;
