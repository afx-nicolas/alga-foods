import type { NextPage } from 'next';

import styles from '../styles/Home.module.sass';

import Hero from '../components/Hero';
import Button from '../components/Button';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.cta}>
        <h1>Busque pelos melhores restaurantes da sua região!</h1>
        <Button isLink href="/restaurantes" className={styles.button} size="md">
          Ver restaurantes
        </Button>
      </div>
      <div className={styles.svgContainer}>
        <Hero className={styles.heroSvg} />
      </div>
    </section>
  );
};

export default Home;
