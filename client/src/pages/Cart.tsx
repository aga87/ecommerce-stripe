import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { CartProduct } from '../components/CartProduct';
import { useAppDispatch, useAppSelector } from '../redux/typed-hooks';
import {
  selectCartProducts,
  selectCartProductsQuantity,
  selectTotalCostOfCartProducts
} from '../redux/selectors/cartProductsSelectors';
import { checkout } from '../redux/thunks/checkoutThunks';
import { useRedirectToCheckout } from '../hooks/useRedirectToCheckout';

export const Cart = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  const cartProductsQuantity = useAppSelector(selectCartProductsQuantity);
  const totalCostOfCartProducts = useAppSelector(selectTotalCostOfCartProducts);

  const dispatch = useAppDispatch();

  const handlePurchase = () => {
    const checkoutItems: CheckoutItem[] = cartProducts.map(cartProduct => ({
      id: cartProduct.id,
      quantity: cartProduct.quantity
    }));
    dispatch(checkout(checkoutItems));
  };

  const { isLoading, error } = useRedirectToCheckout();

  return (
    <div style={{ paddingBottom: '20px' }}>
      <h1 className='p-3'>Cart</h1>
      {error && <Alert variant='danger'>{error}</Alert>}
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
          <span style={{ marginRight: '10px' }}>
            <Button
              variant='success'
              onClick={handlePurchase}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Purchase items!'}
            </Button>
          </span>
        </>
      ) : (
        <p>There are no items in your cart.</p>
      )}
      <NavLink to='/' className='btn btn-primary'>
        Back to the Store
      </NavLink>
    </div>
  );
};
