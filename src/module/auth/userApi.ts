import { Router } from "express";
import { createUser } from "./userController";

const router = Router();

router.post(`/registration`, createUser );




export const userRouter = router