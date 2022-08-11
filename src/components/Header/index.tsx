import Link from 'next/link';

import styles from './Header.module.sass';

import Logo from '../Logo';
import Cart from '../Cart';
import MobileMenuButton from '../MobileMenuButton';
import NavLinks from '../NavLinks';

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
          <MobileMenuButton>
            <nav className={styles.nav}>
              <NavLinks />
            </nav>
          </MobileMenuButton>
          <Cart />
        </section>
      </div>
    </header>
  );
}
