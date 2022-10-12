import express from "express";
import { Express, Request, Response } from "express";
import { Contenedor } from "./entrega2/Contenedor";

//  Antes de iniciar el servidor colocar en el archivo productos.txt tres productos

const mockData = [
  { title: "Producto 1", price: 100, thumbnail: "Foto 1" },
  { title: "Producto 2", price: 200, thumbnail: "Foto 2" },
  { title: "Producto 3", price: 300, thumbnail: "Foto 3" },
  { title: "Producto 4", price: 400, thumbnail: "Foto 4" },
];

const contenedor: Contenedor = new Contenedor("productos.json");

addMockData(contenedor, mockData);

async function addMockData(
  contenedor: Contenedor,
  mockData: object[]
): Promise<void> {
  const data = await contenedor.getAll();

  if (data.length === 0) {
    for (let data of mockData) {
      const id = await contenedor.save(data);
    }
  }
}

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Servidor funcionando en puerto:  ", PORT);
});

app.get("/productos", (req: Request, res: Response) => {
  const productos = contenedor.getAll();
  res.json(productos);
});

app.get("/productoRandom", (req: Request, res: Response) => {
  const productos = contenedor.getAll();
  const random = Math.floor(Math.random() * productos.length);
  res.json(productos[random]);
});
app.get("/", (req: Request, res: Response) => {
  res.send("servidor operando en puerto 8080");
});
