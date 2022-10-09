import { v4 as uuidv4 } from "uuid";
import { ICreateUserDTO } from "../repositories/IUsersRepository";

export class User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  createdAt: Date;

  constructor({ name, email, cpf }: ICreateUserDTO) {
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.createdAt = new Date();
  }
}
