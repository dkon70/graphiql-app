import React from 'react';
import Card from './Card';
import dev1 from 'src/images/dev1.jpg';
import dev2 from 'src/images/dev2.png';
import dev3 from 'src/images/dev3.png';
import { Separator } from '@/components/ui/separator';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent, Members } from '@/lib/langText';

const AboutSection = () => {
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].team;
  const photos = [dev1, dev2, dev3];

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
          {photos.map((photo, ind) => (
            <Card
              key={ind + 1}
              photo={photo}
              name={text.ourTeam.members[(ind + 1) as keyof Members].name}
              description={
                text.ourTeam.members[(ind + 1) as keyof Members].description
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
