import styles from '../styles/Home.module.sass';

import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.cta}>
          <h1>Busque pelos melhores restaurantes da sua região!</h1>
          <Button
            isLink
            href="/restaurantes"
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
    </>
  );
}
