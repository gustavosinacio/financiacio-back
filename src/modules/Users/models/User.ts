import { v4 as uuidv4 } from "uuid";
import { ICreateUserDTO } from "../repositories/IUsersRepository";

export class User {
  id: string;
  name: string;
  cpf: string;
  createdAt: Date;

  constructor({ name, cpf }: ICreateUserDTO) {
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.cpf = cpf;
    this.createdAt = new Date();
  }
}
