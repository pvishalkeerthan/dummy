require("dotenv").config();
const express=require("express");
const port=process.env.PORT;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let authRoute=require("./Routes/authentication.route");
let courseRoute=require("./Routes/course.route");
let enrollRoute=require("./Routes/enrollment.route");
let profileRoute=require("./Routes/profile.route");
let reviewRoute=require("./Routes/review.route");


app.use("/api/auth",authRoute);
app.use("/api/courses",courseRoute);
app.use("/api/profile",profileRoute);
app.use("/api/enrollments",enrollRoute);
app.use("/api/reviews",reviewRoute);

app.listen(port,()=>)