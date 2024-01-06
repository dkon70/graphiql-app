import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ReactNode, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useLang } from '@/lib/langContext';
import { Provider } from 'react-redux';
import store from '@/lib/store/store';

const Layout = ({ children }: { children: ReactNode }) => {
  const { updateLang } = useLang();

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      updateLang(savedLang);
    }
  }, []);

  return (
    <div className='flex flex-col justify-between h-full'>
      <Header />
      <main className=" bg-slate-500 grow">
        <Provider store={store}>{children}</Provider>
      </main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
