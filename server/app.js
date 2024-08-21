import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import userRoutes from "./src/routes/userRoute.js";
import categoryRoutes from "./src/routes/categoryRoute.js";
import subCategoryRoutes from "./src/routes/subCategoryRoute.js";
import productRoutes from "./src/routes/productRoute.js";
import cartRoutes from "./src/routes/cartRoute.js";
import orderRoutes from "./src/routes/orderRoute.js";
import wishlistRoutes from "./src/routes/wishlistRoute.js";
import reviewRoutes from "./src/routes/reviewRoute.js";
import doctorRoutes from "./src/routes/doctorRoute.js";

const app = express();
app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", subCategoryRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", wishlistRoutes);
app.use("/api/v1", reviewRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", doctorRoutes);

export default app;
