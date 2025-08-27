import "dotenv/config";
import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source"; 
import employeeRouter from "./routes/employee.router";

AppDataSource.initialize()
.then(async () => {
  const app = express();
  app.use(express.json());
  app.use('/public',employeeRouter);
  // API Routes
  app.get("/api/greet", (req: Request, res: Response) => {
    return res.json({ name: "HELLOW" });
  });

  app.listen(8000)
  console.log("Server is running on http://localhost:8000")
})
.catch((error) => console.log(error));
