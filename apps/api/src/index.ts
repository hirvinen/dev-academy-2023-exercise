import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Get the .env file from the root of the project.
dotenv.config({ path: process.cwd() + '/../../.env' });

const app: Express = express();
const port: number = (process.env.API_PORT || 3000) as number;
const host: string = process.env.API_HOST || 'localhost';

app.get('/', (req: Request, res: Response) => {
  res.send('');
});

app.listen(port, host, () => {
  console.log(`API running at http://${host}:${port}`);
});
