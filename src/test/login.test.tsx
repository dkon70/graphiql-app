import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import LoginPage from '@/pages/login';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from './mockRouter';
import { Toaster } from '@/components/ui/toaster';
import { NextRouter } from 'next/router';

let container: HTMLDivElement | null;
let router: NextRouter;

describe('Login Page', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      router = createMockRouter({});
      if (container) {
        ReactDOM.createRoot(container).render(
          <>
            <RouterContext.Provider value={router}>
              <LoginPage />
              <Toaster />
            </RouterContext.Provider>
          </>
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
    expect(header.textContent).toBe('Authorization');
  });

  test('Render form fields correctly', () => {
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test('Validate form', async () => {
    act(() => {
      fireEvent.change(screen.getByLabelText(/e-mail/i), {
        target: { value: 'ex' },
      });
      fireEvent.change(screen.getByLabelText(/password/i), {
        target: { value: 'p' },
      });
      fireEvent.click(screen.getByText(/submit/i));
    });
    expect(await screen.findByText(/Invalid/i)).toHaveClass('text-destructive');
    expect(await screen.findByText(/at least 8/i)).toBeInTheDocument();
  });
});
