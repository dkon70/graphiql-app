'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';

export default function WelcomeButtons() {
  const [user, loading, error] = useAuthState(auth);
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].welcome;

  return (
    <>
      {error ? (
        <p>error.message</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : user ? (
        <Link href={'/main'} className={buttonVariants()}>
          {text.dashboard}
        </Link>
      ) : (
        <div className="flex space-x-4 my-6">
          <Link
            href={'/login'}
            className={cn(buttonVariants(), 'py-4 px-6 text-sm')}
          >
            {text.login}
          </Link>
          <Link href={'/register'} className={buttonVariants()}>
            {text.register}
          </Link>
        </div>
      )}
    </>
  );
}
