import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import image from 'src/images/rick-and-morty.png';
import AboutSection from '../ui/AboutSection';
import WelcomeButtons from '../ui/welcomeButtons';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';

export default function Welcome() {
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].welcome;

  return (
    <div className=" py-4 bg-white h-full">
      <div className="flex flex-col   items-center justify-center  text-center ">
        <div className="flex flex-col   items-center justify-center md:flex-row max-w-7xl">
          <Image
            src={image}
            priority={true}
            alt="Rick and Morty"
            width={280}
            className="my-auto"
          />

          <div className="lg:w-7/12">
            <h1 className="mb-6 text-3xl font-medium ">
              {text.title[1]}
              <span className="text-green-500">{text.title[2]}</span>
              {text.title[3]}
            </h1>
            <p className="px-2">{text.text}</p>
          </div>
        </div>
        <WelcomeButtons />
        <Separator className="my-4 max-w-7xl" />
        <div className="flex flex-col  md:flex-row items-center justify-center  text-center">
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
