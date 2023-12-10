import { auth } from '@/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { InputForm } from '@/components/Form/Form';
import { useRouter } from 'next/router';

export default function SignInPage() {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();
  if (user) {
    router.push('/');
  }

  return <>{loading ? <h1>Loading...</h1> : <InputForm mode="signIn" />}</>;
}
