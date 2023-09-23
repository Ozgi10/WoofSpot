import mongoose from "mongoose";

const dbConnect = () => {
  const dbUri = process.env.MONGODB_URI;
  mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected 🔥");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
      process.exit(1); // Exit the application if database connection fails
    });
};

export default dbConnect;
