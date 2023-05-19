import { Router } from 'express';
import { createCheckoutSession } from '../controllers/checkout';

const router = Router();

router.post('/', createCheckoutSession);

export { router as checkout };
