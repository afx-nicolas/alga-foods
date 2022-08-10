import { api } from '../services/api';
import type { GetRestaurantsType, RestaurantType } from '../types/api';

import styles from '../styles/Restaurantes.module.sass';
import Card from '../components/Card';
import { NoData } from '../components/Illustrations';

interface RestaurantsType extends RestaurantType {}

interface RestaurantesProps {
  restaurants: RestaurantsType[];
  date: string;
}

export default function Restaurantes({ restaurants }: RestaurantesProps) {
  return (
    <>
      <div className={styles.container}>
        <h1>Restaurantes</h1>
        {restaurants.length ? (
          <section className={styles.cardsContainer}>
            {restaurants.map(({ id, nome, cozinha, taxaFrete }) => (
              <Card key={id} {...{ id, nome, cozinha, taxaFrete }} />
            ))}
          </section>
        ) : (
          <div className={styles.noData}>
            <NoData />
            <span>Nenhum conteúdo encontrado</span>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await api.get<GetRestaurantsType>('/v1/restaurantes');
    const { restaurantes } = data._embedded;

    return {
      props: {
        restaurants: restaurantes,
      },
      revalidate: 60 * 30, // 30 minutes
    };
  } catch {
    throw new Error('Failed to fetch data');
  }
}
