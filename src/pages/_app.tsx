import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './layout';
import { LangProvider } from '@/lib/langContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LangProvider>
  );
}
