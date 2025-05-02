import { Router } from "express";
import { deleteBook, findAllBook, uploadBook } from "./bookController";
import { isAdmin, isLogin } from "../../middlewares/authMiddleware";



const router =  Router();


router.post(`/uploadBook`,isLogin,isAdmin, uploadBook );
router.get(`/all-book`, findAllBook);
router.delete(`/deleteBook/:id`,isLogin,isAdmin ,deleteBook);



export const bookRoute = router