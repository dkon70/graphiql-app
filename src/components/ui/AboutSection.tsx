import React from 'react';
import Card from './Card';
import dev1 from 'src/images/dev1.jpg';
import dev2 from 'src/images/dev2.png';
import dev3 from 'src/images/dev3.png';
import { Separator } from '@/components/ui/separator';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';

const AboutSection = () => {
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].team;
  const cards = [
    {
      id: 1,
      photo: dev1,
      name: text.ourTeam[1].name,
      description: text.ourTeam[1].description,
    },
    {
      id: 2,
      photo: dev2,
      name: text.ourTeam[2].name,
      description: text.ourTeam[2].description,
    },
    {
      id: 3,
      photo: dev3,
      name: text.ourTeam[3].name,
      description: text.ourTeam[3].description,
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-green-500 mb-8">
          {text.aboutTeam.title}
        </h2>
        <p className="text-gray-600 pb-8">{text.aboutTeam.text}</p>
        <Separator />
        <h2 className="text-2xl font-bold text-green-500 my-8">
          {text.ourTeam.title}
        </h2>
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

export default AboutSection;
