import styles from '../styles/Home.module.sass';

import { useLoading } from '../hooks';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function Home() {
  const [isLoading, handleSetLoading] = useLoading();

  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.cta}>
          <h1>Busque pelos melhores restaurantes da sua região!</h1>
          <Button
            isLink
            href="/restaurantes"
            onClick={handleSetLoading}
            className={styles.button}
            size="md"
          >
            Ver restaurantes
          </Button>
        </div>
        <div className={styles.svgContainer}>
          <Hero className={styles.heroSvg} />
        </div>
      </section>
      {isLoading && <Loading />}
    </>
  );
}
