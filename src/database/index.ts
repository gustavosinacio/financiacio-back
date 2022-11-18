import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { User } from '../modules/Users/entities/User';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "financiacio",
  database: "financiacio",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});
