import { ReactNode, createContext, useContext, useState } from 'react';

type langContextType = {
  lang: string;
  updateLang: (savedLang: string) => void;
  switchLang: () => void;
};

const langContextDefault: langContextType = {
  lang: 'en',
  updateLang: () => {},
  switchLang: () => {},
};

const LangContext = createContext<langContextType>(langContextDefault);

export function useLang() {
  return useContext(LangContext);
}

type Props = {
  children: ReactNode;
};

export function LangProvider({ children }: Props) {
  const [lang, setLang] = useState<string>('en');

  const updateLang = (savedLang: string) => {
    setLang(savedLang);
  };

  const switchLang = () => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', newLang);
    setLang(newLang);
  };

  const value = {
    lang,
    updateLang,
    switchLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
