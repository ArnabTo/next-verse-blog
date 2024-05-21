import mongoose from "mongoose";

const connectDB = async () => {

    try {
        const connectionURL = `mongodb+srv://nextverse:IjkbmxyACTPPDbQ6@cluster0.hiylnp2.mongodb.net/NextverseDB?retryWrites=true&w=majority`;
        await mongoose.connect(connectionURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database successfully..🎊🎊')
    }
    catch (e) {
        console.log('Something Went woring', e)
    }
};

export default connectDB;