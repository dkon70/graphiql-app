import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Welcome from '@/components/Welcome';

test('renders welcome message', () => {
  render(<Welcome />);
  const welcomeMessage = screen.getByText('Rick and Morty');
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders login and register links when user is not logged in', () => {
  render(<Welcome />);
  const loginLink = screen.getByText('Login');
  const registerLink = screen.getByText('Register');
  expect(loginLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});
