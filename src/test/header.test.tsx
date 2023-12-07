
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header/Header';

describe('Tests for header', () => {
  test('Header exists', () => {
    render(<Header />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  test('Header renders correctly', () => {
    render(<Header />);

    const header = screen.getByTestId('header');
    expect(header.childNodes.length).toBe(2);
  });

  test('Header changes size on scroll', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(header).toHaveClass('pt-2', 'pb-2');
  });

  test('Header changes size back when scroll to the top', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(header).not.toHaveClass('pt-2', 'pb-2');
  });
});
