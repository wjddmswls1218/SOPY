import mongoose, { Schema } from "mongoose";

const Book = new Schema(
    {
        title : {
            type : String,
            required: true,
        },
        summary : {
            type: String,
            required: true,
        },
        author : {
            type: String,
            required: true,
        },
        published : {
            type: String,
            required: true,
        },
        price : {
            type: Number,
            required: true,
        },
        type : {
            type: String,
            required: true,
        },
    },
)

export default mongoose.model(`Book`, Book, `Book`);