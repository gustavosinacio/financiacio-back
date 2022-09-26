import { Router } from "express";
import { UsersRepository } from "../repositories/Users/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";

const router = Router();
const usersRepository = new UsersRepository();

router.get("/", (_, res) => {
  return res.json(usersRepository.list());
});

router.post("/", (req, res) => {
  const { name, cpf } = req.body;

  new CreateUserService(usersRepository).execute({ name, cpf });

  return res.status(201).send();
});

export const usersRouter = router;
