import { auth } from '@/firebase';
import { signUp } from '@/firebase/signUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';

export default function SignUpPage() {
  const [user, loading] = useAuthState(auth);
  console.log('Loading', loading, '|', 'current user: ', user);
  const [name, setName] = useState('');
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
      <h1>Registration</h1>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
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
      <button onClick={() => signUp(name, email, password)}>Sign up</button>
    </div>
  );
}
