import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "./src/routes/index.js";
import errorHandler from "./src/middlewares/errorValidator.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler)

export default app;
