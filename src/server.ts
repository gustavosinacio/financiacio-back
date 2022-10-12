import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swaggerSetup from "./swagger.json";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("*---*", req.method, req.url);
  next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`---- Server running on port ${port} ----`);
});
