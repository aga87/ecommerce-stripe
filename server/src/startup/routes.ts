import { Application } from 'express';
import cors from 'cors';
import { ping } from '../routes/ping';

export const routes = (app: Application) => {
  const { CLIENT_URL } = process.env;
  const host = CLIENT_URL || 'http://localhost:3000';
  app.use(
    cors({
      origin: host
    })
  );
  app.use('/api/v1/ping', ping);
};
