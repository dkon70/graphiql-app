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
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log('sign in firebase', user);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};
