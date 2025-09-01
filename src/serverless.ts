// src/serverless.ts
import app from "./App";
import { createServer, IncomingMessage, ServerResponse } from "http";

module.exports = (req: IncomingMessage, res: ServerResponse) => {
  const server = createServer(app);
  server.emit("request", req, res);
};
