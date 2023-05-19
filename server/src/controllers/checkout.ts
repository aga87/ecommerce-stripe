import { RequestHandler, Request, Response, NextFunction } from 'express';
import { logger } from '../startup/logger';
import { stripe } from '../startup/stripe';
import { validateCheckoutSchema } from '../validators/checkoutSchemaValidator';

export const createCheckoutSession: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, checkoutItems } = validateCheckoutSchema(req.body);
    if (error) return res.status(400).send({ error });

    const lineItems = checkoutItems.map((item) => ({
      price: item.id,
      quantity: item.quantity
    }));

    const { CLIENT_URL } = process.env;
    const host = CLIENT_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${host}/success`,
      cancel_url: `${host}/cancel`
    });

    if (!session.url) {
      const ERROR_MSG = 'Unable to create checkout session.';
      logger.error(ERROR_MSG);
      throw new Error(ERROR_MSG);
    } else {
      return res.send({ url: session.url });
    }
  } catch (err) {
    next(err);
  }
};
