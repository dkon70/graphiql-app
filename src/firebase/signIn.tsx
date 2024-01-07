import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await signInWithEmailAndPassword(auth, email, password);
};
