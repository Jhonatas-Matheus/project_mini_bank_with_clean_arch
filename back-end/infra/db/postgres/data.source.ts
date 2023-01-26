import "dotenv/config";
import { DataSource } from "typeorm";
// import {} from "./entities/"
import path from "path";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: parseFloat(process.env.PORT as string),
  username: process.env.USERNAME,
  password: process.env.PASSWORD as string,
  database: process.env.DATABASE,
  logging: true,
  synchronize: true,
  entities: [path.join(__dirname, "./entities/**.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
});
