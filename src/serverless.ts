// src/serverless.ts
import { createServer, IncomingMessage, ServerResponse } from "http";
import app from "./App";

module.exports = (req: IncomingMessage, res: ServerResponse) => {
  const server = createServer(app);
  server.emit("request", req, res);
};
