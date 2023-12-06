import NotFound from '@/pages/404';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('404 page tests:', () => {
  test('404 page renders correctly', () => {
    render(<NotFound />);

    const heading = screen.getByText('404');
    const button = screen.getByRole('button');
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
