import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './layout';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { LangProvider } from '@/lib/langContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <LangProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LangProvider>
    </ErrorBoundary>
  );
}
