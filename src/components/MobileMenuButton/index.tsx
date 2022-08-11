import { List, X } from 'phosphor-react';
import { useContext } from 'react';
import { MobileMenuContext } from '../../contexts/MobileMenuContext';
import { useScreenSize } from '../../hooks';
import styles from './MobileMenuButton.module.sass';

interface MobileMenuButtonProps {
  children: React.ReactNode;
}

export default function MobileMenuButton({ children }: MobileMenuButtonProps) {
  const [width] = useScreenSize();
  const { isMenuOpen, switchMenuOpen } = useContext(MobileMenuContext);

  return (
    <>
      {!width ? null : (
        <>
          {width <= 480 ? (
            <section className={styles.container}>
              <button
                onClick={switchMenuOpen}
                className={[styles.button, isMenuOpen ? styles.open : ''].join(
                  ' '
                )}
              >
                <X className={styles.icon} size={40} />
                <List className={styles.icon} size={40} />
              </button>
            </section>
          ) : (
            <>{children}</>
          )}
        </>
      )}
    </>
  );
}
