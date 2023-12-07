import React from 'react';
import Card from './Card';
import image from 'src/images/rick-and-morty.png';
import { Separator } from '@/components/ui/separator';

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
      <h2 className="text-2xl font-bold text-gray-900">About Team</h2>
        <p className="text-gray-600 pb-8">
          Our frontend development team is a group of talented and dedicated
          professionals who are passionate about creating exceptional user
          experiences. With their expertise in HTML, CSS, and JavaScript, they
          bring websites and web applications to life. The team is committed to
          staying up to date with the latest frontend technologies and best
          practices. They are constantly exploring new frameworks, libraries,
          and tools to ensure that they can deliver cutting-edge solutions for
          our clients. Collaboration is at the heart of our team. They work
          closely with designers, back-end developers, and other stakeholders to
          ensure seamless integration and achieve the desired outcomes. They
          have a deep understanding of user-centered design principles and
          strive to create interfaces that are not only visually appealing but
          also intuitive and user-friendly. Our frontend development team is
          known for their attention to detail and their ability to translate
          design concepts into functional and performant code. They are
          experienced in responsive design and ensure that websites and
          applications look and perform seamlessly across different devices and
          screen sizes. When you work with our frontend development team, you
          can expect professionalism, creativity, and a commitment to delivering
          high-quality solutions. They are dedicated to exceeding client
          expectations and are always ready to take on new challenges. Contact
          our team today to discuss your frontend development needs and see how
          we can help bring your ideas to life!
        </p>
        <Separator />
        <h2 className="text-2xl font-bold text-gray-900 my-8">Our Team</h2>
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
