import Author from "../../../model/Author";
import Book from "../../../model/Book";

export default {
    Query : {
        getAllAuthor: async(_, args) => {
            try {
                const result = await Author.find({},{}).populate({
                    path: `artlist`,
                    model: Book,
                });
            }catch(e) {
                console.log(e);
                return [];
            }
        },

        getAuthorOneBy :async(_, args) => {

            const { name } = args;
            try {
                const result = await  Author.findOne({ name } ,{}).populate({
                    path: `artlist`,
                    model: Book,

                });
            }catch(e) {
                console.log(e);
                return [];
            }
        }
    }
}