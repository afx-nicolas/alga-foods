import { useLoading } from '../../hooks';
import styles from './Layout.module.sass';

import Footer from '../Footer';
import Header from '../Header';
import Loading from '../Loading';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, handleSetLoading] = useLoading();

  return (
    <>
      <div className={styles.layout}>
        <Header handleSetLoading={handleSetLoading} />
        <main className={styles.main}>
          <div className={styles.container}>{children}</div>
        </main>
        <Footer />
      </div>
      {isLoading && <Loading />}
    </>
  );
}
