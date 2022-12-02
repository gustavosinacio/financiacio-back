import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { ICreateUserDTO } from "../repositories/IUsersRepository";

@Entity("users")
export class User {
  @PrimaryColumn()
  /**
   * @Column("id")
   * A string passed to the Column anotation means changing the name of the
   * column referenced. This way, the code doens't have to be tightly related to
   * the database
   */
  //
  id: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ length: 11 })
  cpf!: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor(createUserData: ICreateUserDTO) {
    /**
     * This check is being performed due to typeorm running the constructor on
     * server start. If not present, the error of
     * "Cannot destructure property 'name' of 'undefined' as it is undefined"
     * will show up on start
     */
    if (createUserData === undefined) return;

    const { name, email, cpf } = createUserData;
    if (!this.id) this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }
}
