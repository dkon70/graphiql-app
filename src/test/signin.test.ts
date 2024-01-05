/**
 * @jest-environment node
 */

import { signIn } from '../firebase/signIn';

describe('Sign In function', () => {
  test('test', () => {
    expect(() =>
      signIn({ email: 'example@ex.com', password: 'password1@к' })
    ).not.toThrow();
  });
});
