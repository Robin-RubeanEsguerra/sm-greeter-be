import express, { Request, Response } from 'express';
import { ServerResponse } from 'http';

const app = express();

// Define routes
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello from Express + Vercel!');
});

// ✅ Local development: Listen on a port
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

// ✅ Vercel requires a handler function to be exported
export default (req: Request, res: ServerResponse) => {
  app(req, res); // Forward the request to the Express app
};
