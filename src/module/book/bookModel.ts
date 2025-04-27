import { model, Schema } from "mongoose";
import { IBook } from "./bookInterface";


const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publicationYear: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true, versionKey: false });



const bookModel = model<IBook>("books", bookSchema);


export default bookModel;