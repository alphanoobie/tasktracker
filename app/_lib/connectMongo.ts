import mongoose from "mongoose";

const connectMongo = async () => {
  let mongo_uri: string;
  if (process.env.MONGO_URI) {
    mongo_uri = process.env.MONGO_URI;
  } else {
    throw new Error("MONOG_URI variable not set");
  }
  mongoose.connect(mongo_uri);
};

export default connectMongo;
