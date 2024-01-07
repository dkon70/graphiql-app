import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Home from '@/pages/index';

let container: HTMLDivElement | null;

describe('Home page', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      if (container) {
        ReactDOM.createRoot(container).render(<Home />);
      }
    });
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('Renders welcome block', () => {
    expect(screen.getByAltText(/Rick/i)).toHaveClass('my-auto');
    expect(screen.getAllByRole('heading')).toHaveLength(6);
    expect(screen.getByText('Our Team')).toBeInTheDocument();
  });
});
