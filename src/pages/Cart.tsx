import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartProduct } from '../components/CartProduct';
import { useAppSelector } from '../redux/typed-hooks';
import {
  selectCartProducts,
  selectCartProductsQuantity,
  selectTotalCostOfCartProducts
} from '../redux/selectors/cartProductsSelectors';

export const Cart = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  const cartProductsQuantity = useAppSelector(selectCartProductsQuantity);
  const totalCostOfCartProducts = useAppSelector(selectTotalCostOfCartProducts);

  return (
    <>
      <h1 className='p-3'>Cart</h1>
      {cartProductsQuantity > 0 ? (
        <>
          <p>Items in your cart:</p>
          {cartProducts.map(cartProduct => (
            <React.Fragment key={cartProduct.id}>
              <CartProduct cartProduct={cartProduct} />
            </React.Fragment>
          ))}

          <p>
            <b>Total: {totalCostOfCartProducts}</b>
          </p>

          <span style={{ marginRight: '10px' }}>
            <Button variant='success'>Purchase items!</Button>
          </span>
        </>
      ) : (
        <p>There are no items in your cart!</p>
      )}
      <NavLink to='/' className='btn btn-primary'>
        Back to the Store
      </NavLink>
    </>
  );
};
