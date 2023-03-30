import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Get the .env file from the root of the project.
dotenv.config({ path: process.cwd() + '/../../.env' });

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('');
});

export default app;