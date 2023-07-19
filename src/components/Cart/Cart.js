import React from 'react';
import './_cart.scss';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart/EmptyCart';
import FilledCart from './FilledCart/FilledCart';

const Cart = () => {
    const cart = useSelector(state => state.cr);
  return (
    <div>
          {
              cart.cartItems.length === 0 ?
                  <EmptyCart />
                  :
                 <FilledCart/>  
        }    
    </div>
  )
}

export default Cart