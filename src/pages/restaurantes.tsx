import { api } from '../services/api';
import type { GetRestaurantsType, RestaurantType } from '../types/api';

import { useLoading } from '../hooks';
import styles from '../styles/Restaurantes.module.sass';
import Card from '../components/Card';
import { NoData } from '../components/Illustrations';
import Loading from '../components/Loading';

interface RestaurantsType extends RestaurantType {}

interface RestaurantesProps {
  restaurants: RestaurantsType[];
  date: string;
}

export default function Restaurantes({ restaurants }: RestaurantesProps) {
  const [isLoading, handleSetLoading] = useLoading();

  return (
    <>
      <div className={styles.container}>
        <h1>Restaurantes</h1>
        {restaurants.length ? (
          <section className={styles.cardsContainer}>
            {restaurants.map(({ id, nome, cozinha, taxaFrete }) => (
              <Card
                key={id}
                {...{ id, nome, cozinha, taxaFrete, handleSetLoading }}
              />
            ))}
          </section>
        ) : (
          <div className={styles.noData}>
            <NoData />
            <span>Nenhum conteúdo encontrado</span>
          </div>
        )}
      </div>
      {isLoading && <Loading />}
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
