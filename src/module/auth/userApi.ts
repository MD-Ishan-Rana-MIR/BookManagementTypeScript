import { Router } from "express";
import { createUser, findAllUser, loginUser, profileDelete, updateProfile, userProfile } from "./userController";
import { isAdmin, isLogin } from "../../middlewares/authMiddleware";

const router = Router();

router.post(`/registration`, createUser );
router.post(`/login`,loginUser);
router.get(`/user-profile`, isLogin,userProfile);
router.put(`/updateProfile`,isLogin,updateProfile);
router.delete(`/deleteProfile/:id`,isLogin,isAdmin,profileDelete);
router.get(`/findAllUser`,isLogin,isAdmin,findAllUser);



export const userRouter = router