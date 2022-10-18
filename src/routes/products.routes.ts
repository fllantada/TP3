import { Router } from "express";
import productApi from "../controller/products";
import { Request, Response } from "express";
import path from "path";

const productos = Router();
const filePath = path.resolve(__dirname, "../../archivo.txt");

const getAllTest = (req: Request, res: Response) => {
  productApi.getAll(req, res);
};
productos.get("/", getAllTest);

export default productos;
