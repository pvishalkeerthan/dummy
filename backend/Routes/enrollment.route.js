import express from "express";
const app = express();
const route = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import {
  enrollCourse,
  unEnrollCourse,
} from "../controllers/enrollment.controller.js";

route.post("", enrollCourse);
route.delete("/:id", unEnrollCourse);
export default route;
