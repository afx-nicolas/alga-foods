import { ShoppingCart } from 'phosphor-react';

import styles from './Cart.module.sass';

export default function Cart() {
  return (
    <button className={styles.cart}>
      <div>
        <ShoppingCart size={24} />
        <span className={styles.badge}>+9</span>
      </div>
    </button>
  );
}
