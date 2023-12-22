import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { InputForm } from '@/components/Form/Form';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push('/main');
  }

  return (
    <>
      <main className="w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center">
        {error ? (
          <h1>error.message</h1>
        ) : loading ? (
          <h1>Loading...</h1>
        ) : (
          <InputForm mode="signUp" />
        )}
      </main>
    </>
  );
}
