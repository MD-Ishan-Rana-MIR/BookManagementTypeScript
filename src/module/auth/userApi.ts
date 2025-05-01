import { Router } from "express";
import { createUser, loginUser } from "./userController";

const router = Router();

router.post(`/registration`, createUser );
router.post(`/login`,loginUser)




export const userRouter = router