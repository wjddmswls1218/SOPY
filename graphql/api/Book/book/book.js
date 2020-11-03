import Author from "../../../model/Author";
import Book from "../../../model/Book";

export default {
    Query : {
        getAllBooks :async(_, args) => {
            try{

                const result = await Book.find({},{}).populate({
                    path: `author`,
                    model: Author,
                });

                return result;
            }catch(e){
                console.log(e);
                return [];
            }
        },

        getOneBook :async(_, args) => {

            const { title } = args;

            try {
                const result = await Book.findOne({ title },{}).populate({
                    path: `author`,
                    model: Author,
                })
            }catch(e) {
                console.log(e);
                return {};
            }
        },

        searchBook : async(_, args) => {
            const {title} = args;

            try {


                const result = await Book.find({ title : {
                    $regex : `.*${title}.*`
                } }).sort({price : 1});

                return result;
            }catch(e){
                console.log(e);
                return [];
            }
        },
    },
};