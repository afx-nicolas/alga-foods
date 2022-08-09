import Link from 'next/link';

import styles from './Header.module.sass';

import Logo from '../Logo';
import Cart from '../Cart';
import { useRouter } from 'next/router';

interface HeaderProps {
  handleSetLoading: () => void;
}

export default function Header({ handleSetLoading }: HeaderProps) {
  const router = useRouter();

  const isHomePage = router.pathname === '/';
  const isRestaurantesPage = router.pathname === '/restaurantes';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a onClick={isHomePage ? () => {} : handleSetLoading}>
            <Logo />
          </a>
        </Link>
        <section className={styles.actions}>
          <nav className={styles.nav}>
            <ul>
              <Link href="/">
                <a onClick={isHomePage ? () => {} : handleSetLoading}>
                  <li>Inicio</li>
                </a>
              </Link>
              <Link href="/restaurantes">
                <a onClick={isRestaurantesPage ? () => {} : handleSetLoading}>
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
