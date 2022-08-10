import '../styles/globals.sass';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import MobileMenuProvider from '../contexts/MobileMenuContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MobileMenuProvider>
  );
}

export default MyApp;
