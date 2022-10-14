import { Router } from "express";
import productos from "./products.routes";

const mainRouter = Router();

mainRouter.use("/api/productos", productos);

export default mainRouter;
