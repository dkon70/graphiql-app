import { Button } from '../ui/button';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Switch } from '../ui/switch';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //TODO delete this line
  const user = false;

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
        <Link href="/welcome">Welcome page</Link>
      </div>
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-2">
          EN
          <Switch />
          RU
        </span>
        <Button variant="secondary">
          {user ? 'Sign Out' : 'Login/register'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
