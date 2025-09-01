import "dotenv/config";
import express, { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { public_api } from "./routes";

const app = express();
app.use(express.json());
app.use("/public", public_api);

// API Routes
app.get("/", (req: Request, res: Response) => {
  return res.json({ name: "HELLOW" });
});

// Initialize database and start server only if running locally
if (require.main === module) {
  AppDataSource.initialize()
    .then(() => {
      app.listen(3001, () => {
        console.log("Server is running on http://localhost:3001");
      });
    })
    .catch((error) => console.error(error));
}
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
