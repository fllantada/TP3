import express from "express";
import { Express, Request, Response } from "express";
import mainRouter from "../routes";

const app: Express = express();

app.use(express.json());

app.use("/", mainRouter);
