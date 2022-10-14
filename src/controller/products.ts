import { Request, Response } from "express";
type Product = {
  id?: string;
  title: string;
  price: number;
  thumbnail: string;
};

class ProductApiClass {
  private products: Product[] = [];

  constructor() {
    console.log("Desde el constructor", this);
  }

  getAll(req: Request, res: Response): void {
    console.log("Desde el metodo getAll", this);
    res.send("Hola desde getAll");
  }
}

const productApi = new ProductApiClass();

export default productApi;
