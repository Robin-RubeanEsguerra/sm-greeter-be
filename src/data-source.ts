import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import * as Entities from "./entities";

const isProduction = process.env.NODE_ENV === "production";
const isSSL = process.env.DATABASE_SSL === "true" || isProduction;

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // works for both internal and external
  synchronize: true,
  logging: process.env.LOGGING === "true",
  entities: Object.values(Entities),
  migrations: ["build/migrations/*.js"],
  subscribers: ["build/subscriber/**/*.js"],

  // Only add extra SSL config when required (e.g. Render external)
  ssl: isSSL,
  ...(isSSL && {
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }),
});
