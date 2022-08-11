import Link from 'next/link';
import { CaretRight, ForkKnife } from 'phosphor-react';

import type { RestaurantType } from '../../types/api';

import styles from './Card.module.sass';

interface CardProps extends RestaurantType {}

export default function Card({ id, nome, cozinha, taxaFrete }: CardProps) {
  function toCurrency(value: number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <Link href={`/restaurante/${id}`}>
      <a className={styles.container}>
        <div className={styles.picture}>
          <ForkKnife className={styles.pictureIcon} size={32} />
        </div>
        <div className={styles.info}>
          <h2>{nome}</h2>
          <span>
            {cozinha.nome} - {toCurrency(taxaFrete)}
          </span>
        </div>
        <div>
          <CaretRight className={styles.caret} size={32} />
        </div>
      </a>
    </Link>
  );
}
