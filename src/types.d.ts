type Product = {
  id: string;
  name: string;
  price: number;
};

type CartProduct = Product & { quantity: number };
