import { useContext } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { CartContext } from '../../contexts/CartContext';

import styles from './Cart.module.sass';

export default function Cart() {
  const { cart } = useContext(CartContext);
  const cartItems = Object.keys(cart).length;

  return (
    <button className={styles.cart}>
      <div>
        <ShoppingCart size={24} />
        {cartItems && (
          <span className={styles.badge}>
            {cartItems > 9 ? '+9' : cartItems}
          </span>
        )}
      </div>
    </button>
  );
}
