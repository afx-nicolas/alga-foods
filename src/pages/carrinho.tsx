import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import styles from '../styles/Carrinho.module.sass';

export default function Carrinho() {
  const { cart, decreaseItemAmount, increaseItemAmount } =
    useContext(CartContext);
  const currencyOptions = { style: 'currency', currency: 'BRL' };

  const total = Object.values(cart).reduce((acc, product) => {
    return acc + product.amount * product.price;
  }, 0);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Carrinho</span>
      <table className={styles.cartProducts}>
        <colgroup>
          <col style={{ width: '80%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cart).map(([id, product]) => {
            if (!product.amount) return null;

            return (
              <tr key={id}>
                <td>{product.name}</td>
                <td className={styles.productAmount}>
                  <button onClick={() => decreaseItemAmount(+id)}>-</button>
                  <span>{product.amount}</span>
                  <button onClick={() => increaseItemAmount(+id)}>+</button>
                </td>
                <td>
                  {product.price.toLocaleString('pt-BR', currencyOptions)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total</td>
            <td>{total.toLocaleString('pt-BR', currencyOptions)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
