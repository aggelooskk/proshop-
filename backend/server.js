import express from "express";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

const port = process.env.PORT || 5001;

connectDB(); //Connect to mongoDB

const app = express();

app.get("/", (req, res) => {
    res.send("API is running ...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});