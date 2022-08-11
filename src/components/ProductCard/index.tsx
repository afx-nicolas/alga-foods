import Image from 'next/image';
import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { ProdutoType } from '../../types/api';
import Button from '../Button';
import styles from './ProductCard.module.sass';

interface ProductCardProps extends ProdutoType {
  src: string;
}

export default function ProductCard({
  id,
  nome,
  descricao,
  preco,
  src,
}: ProductCardProps) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart(id, { name: nome, price: preco });
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.dragPrevent} />
        <Image
          className={styles.image}
          src={src}
          alt={nome}
          layout="fill"
          placeholder="blur"
          blurDataURL={src}
        />
      </div>
      <section className={styles.info}>
        <span className={styles.name}>{nome}</span>
        <p className={styles.description}>{descricao}</p>
      </section>
      <section className={styles.actions}>
        <span className={styles.price}>
          {preco.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })}
        </span>
        <Button onClick={handleAddToCart} className={styles.addToCard}>
          Adicionar ao carrinho
        </Button>
      </section>
    </div>
  );
}
