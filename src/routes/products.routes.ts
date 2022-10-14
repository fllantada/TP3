import { Router } from "express";
import productApi from "../controller/products";

const productos = Router();

productos.get("/", productApi.getAll);

export default productos;
