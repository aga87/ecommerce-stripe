import dotenv from 'dotenv';
import express, { Application } from 'express';
import { routes } from './startup/routes';

dotenv.config();

const app: Application = express();

routes(app);

const { PORT } = process.env;
const port = PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${port}...`));
