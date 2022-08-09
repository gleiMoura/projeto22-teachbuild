import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "./src/routes";

const app = express();

app.use(cors());
app.use(json());
app.use(router);

export default app;
