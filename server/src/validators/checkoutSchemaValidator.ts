import Joi from 'joi';

type CheckoutItem = {
  id: string;
  quantity: number;
};

export const validateCheckoutSchema = (
  checkoutSchema: unknown
):
  | {
      error: null;
      checkoutItems: CheckoutItem[];
    }
  | {
      error: string[];
      checkoutItems: undefined;
    } => {
  const schema = Joi.object({
    checkoutItems: Joi.array()
      .items(
        Joi.object({
          id: Joi.string().required(),
          quantity: Joi.number().integer().positive().required()
        })
      )
      .required()
  });

  const { error } = schema.validate(
    checkoutSchema,
    // Get all errors (not only the first one)
    { abortEarly: false }
  );

  if (error) {
    const errorList: string[] = [];
    error.details.forEach((error) => errorList.push(error.message));
    return { error: errorList, checkoutItems: undefined };
  }
  const { checkoutItems } = checkoutSchema as { checkoutItems: CheckoutItem[] };
  return { error: null, checkoutItems };
};
