import express, { Request, Response, Router } from "express";

const app = express();
const port = 3333;

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Financiacio V1" });
});

app.use(route);

app.listen(port, () => {
  console.log(`---- Server running on port ${port} ----`);
});
