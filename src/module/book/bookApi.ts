import { Router } from "express";
import { findAllBook } from "./bookController";



const router =  Router();


router.get(`/all-book`, findAllBook)



export const bookRoute = router