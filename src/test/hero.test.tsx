import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Main from '@/components/Main';

test('renders welcome message', () => {
  render(<Main />);
  const welcomeMessage = screen.getByText('Rick and Morty');
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders login and register links when user is not logged in', () => {
  render(<Main />);
  const loginLink = screen.getByText('Login');
  const registerLink = screen.getByText('Register');
  expect(loginLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});

