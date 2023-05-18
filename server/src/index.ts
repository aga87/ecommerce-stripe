import dotenv from 'dotenv';
import express, { Application } from 'express';
import { logger } from './startup/logger';
import { routes } from './startup/routes';

dotenv.config();

const app: Application = express();

routes(app);

const { PORT } = process.env;
const port = PORT || 5000;
app.listen(PORT, () => logger.info(`Listening on port ${port}...`));
