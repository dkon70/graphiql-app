import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { Switch } from '../ui/switch';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { signout } from '@/firebase/signOut';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user] = useAuthState(auth);

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
      <div>
        <Link href="/" className="mr-5">
          Home
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <span className="flex items-center gap-2">
          EN
          <Switch />
          RU
        </span>
        {user ? (
          <Button
            variant="secondary"
            onClick={() => {
              signout();
            }}
          >
            Sign Out
          </Button>
        ) : (
          <span className="flex flex-wrap justify-end gap-1">
            <Link
              href={'/login'}
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            >
              Login
            </Link>
            <Link
              href={'/register'}
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            >
              Register
            </Link>
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
