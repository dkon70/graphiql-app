import { auth } from '@/firebase';
import { signIn } from '@/firebase/signIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';

export default function SignInPage() {
  const [user, loading] = useAuthState(auth);
  console.log('Loading', loading, '|', 'current user: ', user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    console.log(user);
  }

  return (
    <div>
      <h1>Autorization</h1>
      <input
        type="text"
        name="email"
        placeholder="Your e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => signIn(email, password)}>Sign in</button>
    </div>
  );
}
