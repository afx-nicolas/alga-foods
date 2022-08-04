import Link from 'next/link';

import styles from './Header.module.sass';

import Logo from '../Logo';
import Cart from '../Cart';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <section className={styles.actions}>
          <nav className={styles.nav}>
            <ul>
              <Link href="/">
                <a>
                  <li>Inicio</li>
                </a>
              </Link>
              <Link href="/restaurantes">
                <a>
                  <li>Restaurantes</li>
                </a>
              </Link>
            </ul>
          </nav>
          <Cart />
        </section>
      </div>
    </header>
  );
}
