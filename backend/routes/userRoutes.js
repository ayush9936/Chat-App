import express from "express";
import {userSidebar} from "../controller/userController.js";
import protectRoutes from "../middleware/protectRoutes.js";


const router = express.Router();

router.get("/",protectRoutes,userSidebar);

export default router;