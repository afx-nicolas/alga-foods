import type { NextPage } from 'next';

import styles from '../styles/Home.module.sass';

import Hero from '../components/Hero';
import Button from '../components/Button';
import { useState } from 'react';
import Loading from '../components/Loading';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading() {
    setIsLoading(true);
  }

  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.cta}>
          <h1>Busque pelos melhores restaurantes da sua região!</h1>
          <Button
            isLink
            href="/restaurantes"
            onClick={handleLoading}
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
};

export default Home;
