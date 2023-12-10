import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { InputForm } from '@/components/Form/Form';
import { useRouter } from 'next/router';
import Layout from './layout';

export default function SignInPage() {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();
  if (user) {
    router.push('/');
  }

  return (
    <>
      <Layout>
        <main className="w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center">
          {loading ? <h1>Loading...</h1> : <InputForm mode="signUp" />}
        </main>
      </Layout>
    </>
  );
}
