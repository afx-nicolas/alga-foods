import '../styles/globals.sass';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import MobileMenuProvider from '../contexts/MobileMenuContext';
import CartContextProvider from '../contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <MobileMenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MobileMenuProvider>
    </CartContextProvider>
  );
}

export default MyApp;
