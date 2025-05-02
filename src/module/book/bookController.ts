import { Request, Response } from "express";
import { findAllBookService, uploadBookService } from "./bookService";
import bookModel from "./bookModel";



const uploadBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const bookData = req.body;
    const newBook = await uploadBookService(bookData);
    return res.status(201).json({
      status: "success",
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    return res.status(500).json({
      status: "fail",
      message: errorMessage,
    });
  }
};


const findAllBook = async (req: Request, res: Response): Promise<Response> => {
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


const findSingleBook = async (req:Request,res:Response)=>{

  try {
    
  } catch (error) {
    
  }

};

export const deleteBook = async (req:Request,res:Response)=>{
  try {
    let id = req.params.id;
    const filter = {
      _id : id
    };
    const data = await bookModel.findByIdAndDelete(filter);
    return res.status(200).json({
      status : "success",
      msg : "Book delete successfully",
      data : data
    })
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      msg: "Something went wrong",
      error: error
    })
  }
}



export {
  findAllBook,
  uploadBook,
  findSingleBook
}