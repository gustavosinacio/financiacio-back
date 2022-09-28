import { Router } from "express";

import { transactionsRouter } from "./transactions.routes";
import { usersRouter } from "./users.routes";

const routes = Router();

routes.use("/api/users", usersRouter);
routes.use("/api/transactions", transactionsRouter);

export { routes };
