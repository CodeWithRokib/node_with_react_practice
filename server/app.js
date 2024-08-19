import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';



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



export default app;