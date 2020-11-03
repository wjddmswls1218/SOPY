import mongoose from "mongoose";

const Shema = mongoose.Schema;

const Company = new Shema(
    {
        name: {
            type: String,
            required: true,
        },
        startDate: {
            type: String,
            required:true,
        },
        snackList : {
            type: mongoose.Schema.Types.ObjectId,
            ref: `Schema`,
        },

    },
);

export default mongoose.model(`Company`, Company, `Company`);