import { Router } from "express";
import { createUser, loginUser, userProfile } from "./userController";
import { isAdmin, isLogin } from "../../middlewares/authMiddleware";

const router = Router();

router.post(`/registration`, createUser );
router.post(`/login`,loginUser);
router.get(`/user-profile`, isLogin,userProfile)




export const userRouter = router