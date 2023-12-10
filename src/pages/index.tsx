import { auth } from '@/firebase';
import { signout } from '@/firebase/signOut';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <p>Home</p>
      <Link href="/signin">Sign in</Link>
      <Link href="/signup">Sign up</Link>
      <button onClick={signout}>Sign Out</button>
      <h2>{loading ? 'Loading...' : user?.uid ? user?.uid : 'no user...'}</h2>
    </>
  );
}
