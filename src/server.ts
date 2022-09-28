import express, { NextFunction, Request, Response } from "express";
import { transactionsRouter } from "./routes/transactions.routes";

// import { transactionsRouter } from "./routes/transactions";
import { usersRouter } from "./routes/users.routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("*---*", req.method, req.url);

  next();
});

// ? ---------------------------------------------------------------------------

app.use("/api/users", usersRouter);
app.use("/api/transactions", transactionsRouter);

// ? ---------------------------------------------------------------------------

app.get("/api", (req: Request, res: Response) => {
  return res.json({ message: "Financiacio V1" });
});

app.listen(port, () => {
  console.log(`---- Server running on port ${port} ----`);
});
