import { Request, Response } from "express";
import { findAllBookService } from "./bookService";


const findAllBook = async (req: Request, res: Response):Promise<Response> => {
    try {
        const data = await findAllBookService();
        return res.status(200).json({
            status: "success",
            msg: "All book fetch successfully",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: "Something went wrong",
            error: error
        })
    }
};


export {
    findAllBook
}