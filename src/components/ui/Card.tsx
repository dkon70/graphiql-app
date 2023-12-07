// components/Card.js

import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Card = ({
  photo,
  name,
  description,
}: {
  photo: StaticImageData;
  name: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
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
