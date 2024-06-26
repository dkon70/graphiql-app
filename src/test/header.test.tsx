import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Header from '@/components/Header/Header';

let container: HTMLDivElement | null;
let header: HTMLElement;

describe('Tests for header', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      if (container) {
        ReactDOM.createRoot(container).render(<Header />);
      }
    });
    header = screen.getByTestId('header');
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('Header exists', () => {
    expect(header).toBeInTheDocument();
  });

  test('Header renders correctly', () => {
    expect(header.childNodes.length).toBe(2);
  });

  test('Header changes size on scroll', () => {
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });
    expect(header).toHaveClass('pt-2', 'pb-2');
  });

  test('Header changes size back when scroll to the top', () => {
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      fireEvent.scroll(window, { target: { scrollY: 0 } });
    });
    expect(header).not.toHaveClass('pt-2', 'pb-2');
  });
});
