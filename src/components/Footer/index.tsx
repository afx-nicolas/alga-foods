import { Heart } from 'phosphor-react';

import styles from './Footer.module.sass';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Made with <Heart className={styles.icon} weight="fill" size={24} /> by
        Nicolas A. Feitoza
      </span>
    </footer>
  );
}
