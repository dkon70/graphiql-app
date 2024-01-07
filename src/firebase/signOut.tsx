import { signOut } from 'firebase/auth';
import { auth } from './index';

export const signout = () => {
  signOut(auth);
};
