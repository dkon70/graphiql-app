import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import RegisterPage from '@/pages/register';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from './mockRouter';

let container: HTMLDivElement | null;

describe('Register Page', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      if (container) {
        ReactDOM.createRoot(container).render(
          <RouterContext.Provider value={createMockRouter({})}>
            <RegisterPage />
          </RouterContext.Provider>
        );
      }
    });
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('Renders header', () => {
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header.textContent).toBe('Registration');
  });

  test('Render form fields correctly', () => {
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });
});
