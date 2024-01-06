import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { Switch } from '../ui/switch';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { signout } from '@/firebase/signOut';
import { useLang } from '@/lib/langContext';
import { textContent, TextContentType } from '@/lib/langText';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user] = useAuthState(auth);
  const { lang, switchLang } = useLang();
  const text = textContent[lang as keyof TextContentType].header;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [isScrolled]);

  return (
    <header
      className={`w-full sticky bg-slate-800 z-10 top-0 flex p-5 duration-200 text-white items-center justify-between ${
        isScrolled ? 'pt-2 pb-2' : ''
      }`}
      data-testid="header"
    >
      <div>
        <Link href="/" className="mr-5">
          {text.home}
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <span className="flex items-center gap-2">
          {text.en}
          <Switch
            name="switcher"
            data-testid="switch-lang"
            onClick={switchLang}
            checked={lang === 'en' ? false : true}
          />
          {text.ru}
        </span>
        {user ? (
          <Button
            variant="secondary"
            onClick={() => {
              signout();
            }}
          >
            {text.signOut}
          </Button>
        ) : (
          <span className="flex flex-wrap justify-end gap-1">
            <Link
              href={'/login'}
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            >
              {text.login}
            </Link>
            <Link
              href={'/register'}
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            >
              {text.register}
            </Link>
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
