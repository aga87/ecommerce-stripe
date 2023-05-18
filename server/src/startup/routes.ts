import express, { Application } from 'express';
import cors from 'cors';
import { checkout } from '../routes/checkout';
import { ping } from '../routes/ping';
import { errorMiddleware } from '../middleware/error';

export const routes = (app: Application) => {
  const { CLIENT_URL } = process.env;
  const host = CLIENT_URL || 'http://localhost:3000';
  app.use(
    cors({
      origin: host
    })
  );
  app.use(express.json());
  app.use('/api/v1/ping', ping);
  app.use('/api/v1/checkout', checkout);
  app.use(errorMiddleware);
};
