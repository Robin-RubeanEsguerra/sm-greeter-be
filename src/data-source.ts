import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import * as Entities from "./entities"; // uses index.ts to load all entities


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize:true,
logging: !!process.env.LOGGING,
  entities: Object.values(Entities),
  migrations: ["build/migrations/*.js"],
  subscribers: ["build/subscriber/**/*.js"],
  ssl: !!process.env.POSTGRES_SSL,
});
