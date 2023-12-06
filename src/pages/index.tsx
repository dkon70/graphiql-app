// import '@/firebase';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>Home</p>
      <Link href="/signin">Sign in</Link>
      <Link href="/signup">Sign up</Link>
    </>
  );
}
