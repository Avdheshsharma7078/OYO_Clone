import mongoose from "mongoose";

const URI ="mongodb+srv://oyo:123@oyo.t1r7vwd.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  }else{
     const newDB = await mongoose.connect(URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     console.log("db connect");
     cachedDB = newDB;
     return newDB;
  }
 
};

export default connectDB;