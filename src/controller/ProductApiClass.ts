import { Request, Response } from "express";
type Product = {
  id?: string;
  title: string;
  price: number;
  thumbnail: string;
};

const testProduct: Product = {
  id: "1",
  title: "test",
  price: 100,
  thumbnail: "test",
};

class ProductApiClass {
  private products: Product[] = [testProduct];

  constructor() {}

  getAll(req: Request, res: Response): void {
    res.json({ data: this.products });
  }

  getById(req: Request, res: Response): void {
    const { id } = req.params;
    const product = this.products.find((p) => p.id === id);
    if (product) {
      res.json({ data: product });
    } else {
      res.json({ error: "Producto no encontrado" });
    }
  }
  create(req: Request, res: Response): void {
    const product = req.body;
    product.id = this.products.length + 1;
    this.products.push(product);
    res.json({ data: product });
  }
  edit(req: Request, res: Response): void {
    const { id } = req.params;
    const newProduct = req.body;
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.title = newProduct.title || product.title;
      product.price = newProduct.price || product.price;
      product.thumbnail = newProduct.thumbnail || product.thumbnail;
      res.json({ data: product });
    } else {
      res.json({ error: "Producto no encontrado" });
    }
  }

  delete(req: Request, res: Response): void {
    const { id } = req.params;
    const product = this.products.find((p) => p.id === id);
    if (product) {
      this.products = this.products.filter((p) => p.id !== id);
      res.json({ msg: "Producto eliminado", id });
    } else {
      res.json({ error: "Producto no encontrado" });
    }
  }
}

const productApi = new ProductApiClass();

export default productApi;
