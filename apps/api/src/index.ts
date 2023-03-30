import app from './app';

const port: number = (process.env.API_PORT || 3000) as number;
const host: string = process.env.API_HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`API running at http://${host}:${port}`);
});
