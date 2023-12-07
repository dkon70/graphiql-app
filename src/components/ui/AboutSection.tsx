import React from 'react';
import Card from './Card';
import dev1 from 'src/images/dev1.jpg';
import dev2 from 'src/images/dev2.png';
import dev3 from 'src/images/dev3.png';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  const cards = [
    {
      id: 1,
      photo: dev1,
      name: 'Dmitry Konev',
      description:
        "Aspiring web developer diving into the world of React. Eager to learn and create interactive user interfaces. Let's code! 🚀",
    },
    {
      id: 2,
      photo: dev2,
      name: 'Natalia Lebedeva',
      description:
        'Natalia has a higher education in construction, but has been interested in programming all her life. She started her path in IT with Python and machine learning, and then got acquainted with web development and realized that she had found her direction. Now she does what she is really interested in, what energizes and inspires her.',
    },
    {
      id: 3,
      photo: dev3,
      name: 'Nikita Starmoussov',
      description:
        "Nikita, another of our promising junior frontend developers, is the embodiment of ambition and skill. Young yet incredibly adept, his drive to be the best is palpable in every task he undertakes.. Every line of code he writes echoes his dedication and eagerness to excel. With such passion, there's no doubt that the sky's the limit for him in the tech world.",
    },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-green-500 mb-8">About Team</h2>
        <p className="text-gray-600 pb-8">
          Our frontend development team is a group of talented and dedicated
          professionals who are passionate about creating exceptional user
          experiences. With their expertise in HTML, CSS, and JavaScript, they
          bring websites and web applications to life. The team is committed to
          staying up to date with the latest frontend technologies and best
          practices. They are constantly exploring new frameworks, libraries.
        </p>
        <Separator />
        <h2 className="text-2xl font-bold text-green-500 my-8">Our Team</h2>
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
