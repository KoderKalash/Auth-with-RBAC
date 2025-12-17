import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected succesfully!')
    }catch(error){
        console.error('MongoDB was not able connect!',error)
    }
}

export default connectDB