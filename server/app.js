import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
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
import contactRoutes from "./src/routes/contactRoute.js";
import appointmentRoutes from "./src/routes/appointmentRoute.js";
import departmentRoutes from "./src/routes/departmentRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

app.use("/api/v1", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", subCategoryRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", wishlistRoutes);
app.use("/api/v1", reviewRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", doctorRoutes);
app.use("/api/v1", contactRoutes);
app.use("/api/v1", appointmentRoutes);
app.use("/api/v1", departmentRoutes);

export default app;
