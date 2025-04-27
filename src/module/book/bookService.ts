import { IBook } from "./bookInterface";
import bookModel from "./bookModel"


const findAllBookService = async()=>{
    let book = await bookModel.find();
    return book;
};

const uploadBookService = async (data:IBook)=>{
    let book = bookModel.create(data);
    return book
}


export {
    findAllBookService,
    uploadBookService
}