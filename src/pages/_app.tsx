import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './layout';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
