'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

export default function WelcomeButtons() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {error ? (
        <p>error.message</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : user ? (
        <Link href={'/main'} className={buttonVariants()}>
          Dashboard
        </Link>
      ) : (
        <div className="flex space-x-4 my-6">
          <Link
            href={'/login'}
            className={cn(buttonVariants(), 'py-4 px-6 text-sm')}
          >
            Login
          </Link>
          <Link href={'/register'} className={buttonVariants()}>
            Register
          </Link>
        </div>
      )}
    </>
  );
}
