import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Welcome from '@/components/Welcome';

let container: HTMLDivElement | null;

describe('Welcome page', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      if (container) {
        ReactDOM.createRoot(container).render(<Welcome />);
      }
    });
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('renders welcome message', () => {
    act(() => {
      const welcomeMessage = screen.getByText('Rick and Morty');
      expect(welcomeMessage).toBeInTheDocument();
    });
  });

  test('renders welcome image', () => {
    const welcomeImage = screen.getByAltText('Rick and Morty');
    expect(welcomeImage).toBeInTheDocument();
  });

  test('renders Our Team block', async () => {
    await waitFor(() => {
      const ourTeamTitle = screen.getByText('Our Team');
      expect(ourTeamTitle).toBeInTheDocument();
    });
  });

  test('Main route exists', () => {
    expect(global.location.pathname).toBe('/');
  });
});
