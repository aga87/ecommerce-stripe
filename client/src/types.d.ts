type Product = {
  id: string;
  name: string;
  price: number;
};

type CartProduct = Product & { quantity: number };

type CheckoutItem = Pick<CartProduct, 'id' | 'quantity'>;
