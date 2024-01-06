import { useRouter } from 'next/router';
import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { InputForm } from '@/components/Form/Form';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';

export default function RegisterPage() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].authPage;

  if (user) {
    router.push('/main');
  }

  return (
    <>
      <main className="w-full h-[calc(100vh-160px)] p-3 flex flex-col justify-center items-center">
        {error ? (
          <h1>error.message</h1>
        ) : loading ? (
          <h1>{text.loading}</h1>
        ) : (
          <InputForm mode="signUp" />
        )}
      </main>
    </>
  );
}
