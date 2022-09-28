import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("*---*", req.method, req.url);

  next();
});

app.get("/api", (req: Request, res: Response) => {
  return res.json({ message: "Financiacio V1" });
});

app.use(routes);

app.listen(port, () => {
  console.log(`---- Server running on port ${port} ----`);
});
