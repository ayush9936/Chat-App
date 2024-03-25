import express from "express";
import { sendMessage,getMessage } from "../controller/messageController.js";
import protectRoutes from "../middleware/protectRoutes.js";

const router = express.Router();

router.get("/:id",protectRoutes,getMessage);
router.post("/send/:id",protectRoutes,sendMessage);


export default router;