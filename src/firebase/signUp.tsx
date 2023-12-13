import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from './index';
import { SignUpFormData } from '@/components/Form/Schema';
import { FirebaseError } from 'firebase/app';

export const signUp = async ({ username, email, password }: SignUpFormData) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: username,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    if (err instanceof FirebaseError) {
      alert(err);
    }
  }
};
