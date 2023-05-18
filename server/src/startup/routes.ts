import { Application } from 'express';
import { ping } from '../routes/ping';

export const routes = (app: Application) => {
  app.use('/api/v1/ping', ping);
};
