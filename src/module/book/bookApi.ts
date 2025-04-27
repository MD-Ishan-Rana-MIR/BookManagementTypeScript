import { Router } from "express";
import { findAllBook, uploadBook } from "./bookController";



const router =  Router();


router.get(`/all-book`, findAllBook);
router.post(`/post-book`, uploadBook );



export const bookRoute = router