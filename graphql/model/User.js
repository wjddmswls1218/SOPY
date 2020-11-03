import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: {
            type : String,
            required: true,
        }, 

        name: {
            type: String,
            required: true,
        }, 

        secretCode: {
            type: String,
            required: true,
        },

        createdAt: {
            type: String,
            required: true,
        } 
    },
    {
        versionKey: false,
    }
)

export default mongoose.model(`User`, User, `User`);