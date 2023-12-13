import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { signout } from '@/firebase/signOut';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();

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
      className={`w-full bg-slate-800 sticky top-0 flex p-5 duration-200 text-white items-center justify-between ${
        isScrolled ? 'pt-2 pb-2' : ''
      }`}
      data-testid="header"
    >
      <div>
        <Link href="/">Home</Link>
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
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="mr-4"
              onClick={() => {
                router.push('/login');
              }}
            >
              Login
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                router.push('/register');
              }}
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
