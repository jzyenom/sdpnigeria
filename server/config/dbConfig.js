import mongoose from "mongoose";

export const dataBaseEng = async () => {
  try {
    let Uri;
    if (process.env.NODE_ENV === "development") {
      Uri = process.env.LOCAL_MONGODB; // Use local db for development
    } else {
      Uri = process.env.PROD_MONGODB; // Use Server db for production
    }

    const connectDb = await mongoose.connect(Uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(
      `BarbDegree Connected: ${connectDb.connection.host}`.bold.blue.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dataBaseEng;
