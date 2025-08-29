import "dotenv/config";
import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source"; 
import { public_api } from "./routes";

AppDataSource.initialize()
.then(async () => {
  const app = express();
  app.use(express.json());
  app.use('/public', public_api);

  // API Routes
  app.get("/", (req: Request, res: Response) => {
    return res.json({ name: "HELLOW" });
  });

  app.listen(3001)
  console.log("Server is running on http://localhost:3001")
})
.catch((error) => console.log(error));

