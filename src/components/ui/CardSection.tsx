import React from 'react';
import Card from './Card';
import image from 'src/images/rick-and-morty.png';

const CardSection = () => {
  const cards = [
    {
      id: 1,
      photo: image,
      name: 'Developer 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      photo: image,
      name: 'Developer 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      photo: image,
      name: 'Developer 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              photo={card.photo}
              name={card.name}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
