import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from './index';
import { SignUpFormData } from '@/components/Form/Schema';

export const signUp = async ({ username, email, password }: SignUpFormData) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name: username,
    authProvider: 'local',
    email,
  });
};
