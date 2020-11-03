export default {
    Mutation : {
        createUser : async(_, args) => {
            const {mail, name, mobile} = args;

            console.log(email);
            console.log(name);
            consolelog(mobile);

            return true;
        },
    },
}