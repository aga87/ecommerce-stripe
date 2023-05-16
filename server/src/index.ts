import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

dotenv.config();

const app: Application = express();

app.get('/ping', (req: Request, res: Response) => {
  res.send('Hello World');
});

const { PORT } = process.env;
const port = PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${port}...`));
