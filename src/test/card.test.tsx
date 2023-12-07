import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/Card';
import image from '@/images/rick-and-morty.png';
import '@testing-library/jest-dom';

describe('Card component', () => {
  test('renders card with correct props', () => {
    const photo = image;
    const name = 'John Doe';
    const description = 'Lorem ipsum dolor sit amet';

    render(
      <Card photo={photo} name={name} description={description} testId="card" />
    );

    const cardElement = screen.getByTestId('card');
    const imageElement = screen.getByAltText(name);
    const nameElement = screen.getByText(name);
    const descriptionElement = screen.getByText(description);

    expect(cardElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
