import  express from "express";
import { chat } from "../Controllers/chatbot.controller.js";



const router = express.Router();

router.post("/openAI", chat)


export default router;