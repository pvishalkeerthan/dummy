import 'dotenv/config';
import express from "express";
import authRoute from "./routes/authentication.route.js";
import courseRoute from "./routes/course.route.js";
import enrollRoute from "./routes/enrollment.route.js";
import profileRoute from "./routes/profile.route.js";
import reviewRoute from "./routes/review.route.js";
import mongoose from "mongoose";

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/courses", courseRoute);
app.use("/api/profile", profileRoute);
app.use("/api/enrollments", enrollRoute);
app.use("/api/reviews", reviewRoute);

mongoose.connect(process.env.MONGODB_URL);
app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {console.log(`listening to ${port}`)});
