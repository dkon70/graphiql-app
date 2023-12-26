import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { signout } from '@/firebase/signOut';
import { useLang } from '@/lib/langContext';
import { textContent, TextContentType } from '@/lib/langText';
import Image from 'next/image';

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
      className={`w-full bg-slate-800 sticky z-10 top-0 flex p-5 duration-200 text-white items-center justify-between ${
        isScrolled ? 'pt-2 pb-2' : ''
      }`}
      data-testid="header"
    >
      <Link href="/">
        <Image
          src="/home.svg"
          width={100}
          height={40}
          alt="Logo"
          style={{ width: 100, height: 40 }}
        />
      </Link>

      <div className="flex items-center gap-8 pl-4">
        <span className="flex flex-col items-center gap-2 min-[400px]:flex-row">
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
            className="bg-slate-800 hover:bg-slate-600 rounded h-10 w-10 p-1 duration-150"
            onClick={() => {
              signout();
            }}
          >
            <Image src="/exit.svg" width={25} height={25} alt="Exit" />
          </Button>
        ) : (
          <span className="flex flex-wrap justify-end gap-1">
            <Link
              href={'/login'}
              className="bg-slate-800 hover:bg-slate-600 rounded h-10 w-10 p-1 duration-150"
            >
              <Image src="/signin.svg" width={30} height={30} alt="Sign in" />
            </Link>
            <Link
              href={'/register'}
              className="bg-slate-800 hover:bg-slate-600 rounded h-10 w-10 p-1 duration-150"
            >
              <Image src="/signup.svg" width={28} height={28} alt="Register" />
            </Link>
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
