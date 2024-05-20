import express from "express";
import {
  userSignUp,
  userLogin,
  userLogout,
} from "../controllers/authentication.controller.js";

const app = express();
const route = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route.post("/signup", userSignUp);
route.post("/login", userLogin);
route.post("/logout", userLogout);

export default route;
