import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from './index';
import { SignUpFormData } from '@/components/Form/Schema';
import { FirebaseError } from 'firebase/app';

export const signUp = async ({ username, email, password }: SignUpFormData) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name: username,
      authProvider: 'local',
      email,
    });
    console.log('sign up firebase', 'user: ', user);
  } catch (err) {
    console.error(err);
    if (err instanceof FirebaseError) {
      console.log(err.message);
      alert(err);
    }
  }
};
