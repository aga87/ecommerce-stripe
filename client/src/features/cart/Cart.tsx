import React from 'react';
import { Error, HomeButton } from '../../components';
import { CartProduct } from './components';
import { useAppSelector } from '../../redux/typed-hooks';
import {
  selectCartProducts,
  selectCartProductsQuantity,
  selectTotalCostOfCartProducts
} from './redux/cartProductsSelectors';

type CartProps = {
  checkoutButton: React.ReactNode;
  checkoutError: string[] | null;
};

export const Cart = ({ checkoutButton, checkoutError }: CartProps) => {
  const cartProducts = useAppSelector(selectCartProducts);
  const cartProductsQuantity = useAppSelector(selectCartProductsQuantity);
  const totalCostOfCartProducts = useAppSelector(selectTotalCostOfCartProducts);

  return (
    <div style={{ paddingBottom: '20px' }}>
      {checkoutError && <Error text={checkoutError.join(' ')} />}
      {cartProductsQuantity > 0 ? (
        <>
          <p>Items in your cart:</p>
          {cartProducts.map(cartProduct => (
            <div
              key={cartProduct.id}
              style={{
                maxWidth: '400px',
                textAlign: 'center',
                marginBottom: '20px'
              }}
            >
              <CartProduct cartProduct={cartProduct} />
            </div>
          ))}
          <p style={{ fontSize: '20px' }}>
            <b>Total: {totalCostOfCartProducts}</b>
          </p>
          <span style={{ marginRight: '10px' }}>{checkoutButton}</span>
        </>
      ) : (
        <p>There are no items in your cart.</p>
      )}
      <HomeButton />
    </div>
  );
};
