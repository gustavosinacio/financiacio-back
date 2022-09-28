import { Router } from "express";
import { createUserController } from "../modules/Users/useCases/createUser";
import { listUsersController } from "../modules/Users/useCases/listUsers";

const router = Router();

router.get("/", (req, res) => listUsersController.handle(req, res));

router.post("/", (req, res) => createUserController.handle(req, res));

export const usersRouter = router;
