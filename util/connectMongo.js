import mongoose from "mongoose";
import url from "@/util/connectUrl";

const connectMongo = async () =>
  mongoose.connect(url, { useNewUrlParser: true });

// useUnifiedTopology: true,

// export default connectMongo;
export default connectMongo;
