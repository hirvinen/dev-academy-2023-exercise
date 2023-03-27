import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port = process.env.API_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('');
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
