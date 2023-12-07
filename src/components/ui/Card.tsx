import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
  photo: StaticImageData;
  name: string;
  description: string;
  testId?: string;
};

const Card = ({
  photo,
  name,
  description,
  testId = 'card',
}: CardProps) => {
  return (
    <div data-testid={testId} className="bg-white rounded-lg shadow-lg p-5">
      <Image
        src={photo}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl text-gray-800 font-medium">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;