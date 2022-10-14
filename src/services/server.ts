import express from "express";
import { Express, Request, Response } from "express";
import mainRouter from "../routes";

const app: Express = express();
console.log("Inicialice la APP");

app.use(express.json());

app.use("/", mainRouter);

export default app;
