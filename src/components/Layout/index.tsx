import styles from './Layout.module.sass';

import Footer from '../Footer';
import Header from '../Header';
import { useContext } from 'react';
import { MobileMenuContext } from '../../contexts/MobileMenuContext';
import NavLinks from '../NavLinks';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isMenuOpen } = useContext(MobileMenuContext);

  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <nav>
                <NavLinks />
              </nav>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
