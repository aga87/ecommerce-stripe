import dotenv from 'dotenv';
import Stripe from 'stripe';
import { logger } from './logger';

dotenv.config();

const { STRIPE_API_KEY } = process.env;

if (!STRIPE_API_KEY) {
  logger.error('Stripe API key is missing.');
  process.exit(1);
}

export const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: '2022-11-15'
});
