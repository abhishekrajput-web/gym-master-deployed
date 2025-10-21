import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.connect(url).then(() => console.log("connected mongodb successfully")).catch((err) => console.log(err || "Mongodb Not Connected") );
}

export default connectDB;