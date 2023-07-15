import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => {
      console.error("failed to connect with mongodb");
      console.error(err);
    });
};

export default connectDB;
