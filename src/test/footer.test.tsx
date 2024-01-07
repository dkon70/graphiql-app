import Footer from '@/components/Footer/Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Footer tests: ', () => {
  test('Footer exists', () => {
    render(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });

  test('Footer renders correctly', () => {
    render(<Footer />);
    const sections = screen.getAllByTestId('section');
    expect(sections).toHaveLength(3);
  });
});
