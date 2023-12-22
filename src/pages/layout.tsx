import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)]">{children}</main>
      <Toaster />
      <Footer />
    </>
  );
};

export default Layout;
