import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Layout from '@/pages/layout';

let container: HTMLDivElement | null;

describe('Register Page', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      if (container) {
        ReactDOM.createRoot(container).render(
          <Layout>
            <h1>Hello</h1>
          </Layout>
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
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByAltText(/Register/i)).toBeInTheDocument();
  });

  test('Render footer', () => {
    expect(screen.getByAltText(/rs-logo/i)).toHaveClass('w-max h-10');
    expect(screen.getAllByRole('link')).toHaveLength(7);
  });
});
