import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};
